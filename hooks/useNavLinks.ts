import { defaultLocale } from "@/i18n/config";
import Dictionary from "@/i18n/types/Dictionary";
import { Locale } from "@/i18n/types/Locale";
import { useMemo } from "react";
import { NavLinkInfo } from "./useHelpers";
import { Vector3 } from "three";

const dictionary: Dictionary<{
    home: string;
    about: string;
    showcase: string;
    contact: string;
    team: string;
    not_found: string;
}> = {
    en: {
        home: "Home",
        about: "About",
        showcase: "Services",
        contact: "Contact",
        team: "Team",
        not_found: "Not found",
    },
    es: {
        home: "Inicio",
        about: "Acerca",
        showcase: "Servicios",
        contact: "Contacto",
        team: "Equipo",
        not_found: "No encontrado",
    },
    de: {
        home: "Home",
        about: "Über uns",
        showcase: "Portfolio",
        contact: "Kontakt",
        team: "Team",
        not_found: "Nicht gefunden",
    },
};

const useNavLinks = (lang: Locale): NavLinkInfo[] => {
    const localeDict = dictionary[lang] ?? dictionary[defaultLocale as Locale];
    return useMemo<NavLinkInfo[]>(
        () => [
            {
                link: "/",
                text: localeDict.home,
                eventKey: "home",
                moveCamTo: new Vector3(30, 30, 15),
                showInNavbar: true,
            },
            {
                link: "/about",
                text: localeDict.about,
                eventKey: "about",
                moveCamTo: new Vector3(3, 12, 18),
                showInNavbar: true,
            },
            {
                link: "/showcase",
                text: localeDict.showcase,
                eventKey: "showcase",
                moveCamTo: new Vector3(20, -40, -70),
                showInNavbar: true,
            },
            {
                link: "/contact",
                text: localeDict.contact,
                eventKey: "contact",
                moveCamTo: new Vector3(60, 20, -20),
                showInNavbar: true,
            },
            {
                link: "/team",
                text: localeDict.team,
                eventKey: "team",
                moveCamTo: new Vector3(90, 15, -5),
                showInNavbar: true,
            },
            {
                link: "/notfound",
                text: localeDict.not_found,
                eventKey: "notfound",
                moveCamTo: new Vector3(30, 10, -15),
                showInNavbar: false,
            },
        ],
        [lang]
    );
};

export default useNavLinks;
