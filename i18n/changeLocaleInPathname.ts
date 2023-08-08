import getLocaleFromPathname from "./getLocaleFromPathname";
import { Locale } from "./types/Locale";

const changeLocaleInPathname = (pathname: string, newLang: Locale): string => {
    const currentLang = getLocaleFromPathname(pathname);
    let newPathname = pathname;
    if (pathname.startsWith(`/${currentLang}/`)) {
        const pathNoLang = newPathname.substring(`/${currentLang}/`.length);
        newPathname = `/${newLang}/${pathNoLang}`;
    } else if (pathname === `/${currentLang}` || pathname === "/") {
        newPathname = `/${newLang}`;
    } else {
        newPathname = `/${newLang}${newPathname}`;
    }
    return newPathname;
};

export default changeLocaleInPathname;
