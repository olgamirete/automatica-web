import { defaultLocale } from "@/i18n/config";
import { useCallback, useMemo } from "react";
import { Vector3 } from "three";
import useNavLinks from "./useNavLinks";
import { SupportedLocale } from "@/i18n/types/Locale";

export interface NavLinkInfo {
    link: string;
    text: string;
    eventKey: string;
    moveCamTo: Vector3;
    showInNavbar: boolean;
}

export interface Helpers {
    constants: {};
    functions: {
        getSectionKeyFromPath: (path: string) => string;
    };
}

function useHelpers(): Helpers {
    // We can use default locale here because no translations of the navlinks
    // are used, only the keys.
    const navLinks = useNavLinks(defaultLocale);
    const getSectionKeyFromPath = useCallback(
        (path: string) => {
            let aux = path + "/";
            aux = aux.substring(1);
            SupportedLocale.some((sl) => {
                if (aux.startsWith(`${sl}/`)) {
                    aux = aux.substring(sl.length + 1);
                    return true;
                }
            });
            aux = aux.substring(0, aux.search("/"));
            aux = aux === "" ? "home" : aux;
            if (navLinks.some((x) => x.eventKey === aux)) {
                return aux;
            }
            return "notfound";
        },
        [navLinks]
    );

    return {
        constants: {},
        functions: {
            getSectionKeyFromPath: getSectionKeyFromPath,
        },
    };
}

export default useHelpers;
