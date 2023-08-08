import { defaultLocale } from "./config";
import { SupportedLocale } from "./types/Locale";

const getLocaleFromPathname = (pathname: string): string => {
    const locale = SupportedLocale.find(
        (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
    );
    return locale ?? defaultLocale;
};

export default getLocaleFromPathname;
