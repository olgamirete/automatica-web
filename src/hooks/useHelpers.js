import { useCallback, useMemo } from 'react';

function useHelpers() {

    const navLinks = useMemo(() => [
        { link: "/", text: "Inicio", eventKey: "home", moveCamTo: [30, 30, 15], showInNavbar: true },
        { link: "/about", text: "Acerca", eventKey: "about", moveCamTo: [3, 12, 18], showInNavbar: true },
        { link: "/showcase", text: "Servicios", eventKey: "showcase", moveCamTo: [20, -40, -70], showInNavbar: true },
        { link: "/contact", text: "Contacto", eventKey: "contact", moveCamTo: [90, 15, -5], showInNavbar: true },
        { link: "/notfound", text: "Not Found", eventKey: "notfound", moveCamTo: [30, 10, -15], showInNavbar: false }
    ], []);

    const getSectionKeyFromPath = useCallback((path) => {
        let aux = path + '/';
        aux = aux.substring(1);
        aux = aux.substring(0, aux.search('/'));
        aux = aux === '' ? 'home' : aux;
        if(navLinks.some((x) => x.eventKey === aux)){
            return aux;
        }
        return 'notfound';
    }, [navLinks]);

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