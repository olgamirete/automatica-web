import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { SupportedLocale } from "./i18n/types/Locale";
import { defaultLocale } from "./i18n/config";
import getLocaleFromPathname from "./i18n/getLocaleFromPathname";

// Get the preferred locale, similar to above or using a library
const getLocaleFromRequest = (request: NextRequest): string => {
    const headers = Object.fromEntries(request.headers.entries());
    const languages = new Negotiator({ headers }).languages();
    return match(languages, SupportedLocale, defaultLocale);
};

export const middleware = (request: NextRequest) => {
    const requestHeaders = new Headers(request.headers);
    const pathname = request.nextUrl.pathname;

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = SupportedLocale.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    let locale: string | null = null;
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        locale = getLocaleFromRequest(request);
        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url)
        );
    } else {
        locale = getLocaleFromPathname(pathname);
    }
    requestHeaders.set("x-pathname", pathname);
    requestHeaders.set("x-locale", locale);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
};

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!api|_next/static|_next/image|favicon.png|images/|cache|robots.txt).*)",
    ],
};
