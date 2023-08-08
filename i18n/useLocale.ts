import { useMemo } from "react";
import { Locale } from "./types/Locale";
import getLocaleFromPathname from "./getLocaleFromPathname";
import { usePathname } from "next/navigation";

const useLocale = (): Locale => {
    const pathname = usePathname();
    return useMemo<Locale>(() => {
        return getLocaleFromPathname(pathname) as Locale;
    }, [pathname]);
};

export default useLocale;
