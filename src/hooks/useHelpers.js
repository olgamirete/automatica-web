import { useCallback, useMemo } from 'react';

function useHelpers() {

    const getSectionKeyFromPath = useCallback((path) => {
        let aux = path + '/';
        aux = aux.substring(1);
        aux = aux.substring(0, aux.search('/'));
        return aux || 'home';
    }, []);

    const navLinks = useMemo(() => [
        { link: "/", text: "Inicio", eventKey: "home", moveCamTo: [30, 30, 15] },
        { link: "/about", text: "¿Qué hacemos?", eventKey: "about", moveCamTo: [3, 12, 18] },
        { link: "/showcase", text: "Algunos ejemplos", eventKey: "showcase", moveCamTo: [20, -40, -70] },
        { link: "/contact", text: "Contacto", eventKey: "contact", moveCamTo: [90, 15, -5] }
    ], []);

    const mainAppId = "main-app";

    const scrollToTop = useCallback(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        const elem = document.getElementById(mainAppId);
        elem.scrollTop = 0;
    }, []);

    return {
        constants: {
            navLinks: navLinks,
            mainAppId: mainAppId
        },
        functions: {
            getSectionKeyFromPath: getSectionKeyFromPath,
            scrollToTop: scrollToTop
        }

    }
}

export default useHelpers;