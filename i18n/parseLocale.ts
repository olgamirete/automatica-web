

import { defaultLocale } from "./config";
import { Locale, SupportedLocale } from "@/i18n/types/Locale";

const parseLocale = (lang?: string): Locale => {
    if (lang) {
        const locale = SupportedLocale.find((locale) => locale === lang);
        if (locale) return locale;
    }
    return defaultLocale;
};

export default parseLocale;
