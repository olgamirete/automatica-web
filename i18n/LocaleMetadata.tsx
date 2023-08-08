import { ReactNode } from "react";
import Dictionary from "./types/Dictionary";
import FlagDE from "assets/twemoji/flag_germany.svg";
import FlagEN from "assets/twemoji/flag_uk.svg";
import FlagES from "assets/twemoji/flag_spain.svg";
import { Locale } from "./types/Locale";

const LocaleMetadata: Dictionary<{
    _code: Locale;
    _name: string;
    _flag: ReactNode;
    _locale: string;
}> = {
    en: {
        _code: "en",
        _name: "English",
        _flag: <FlagEN className="d-block" style={{ width: "1em" }} />,
        _locale: "en-UK",
    },
    es: {
        _code: "es",
        _name: "Español",
        _flag: <FlagES className="d-block" style={{ width: "1em" }} />,
        _locale: "es-ES",
    },
    de: {
        _code: "de",
        _name: "Deutsch",
        _flag: <FlagDE className="d-block" style={{ width: "1em" }} />,
        _locale: "de-DE",
    },
};

export default LocaleMetadata;
