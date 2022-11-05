import LangContext from "contexts/LangContext";
import { useCallback, useContext, useMemo } from "react";
import { Vector3 } from "three";

export interface NavLinkInfo {
  link: string;
  text: string;
  eventKey: string;
  moveCamTo: Vector3;
  showInNavbar: boolean;
}

export interface Helpers {
  constants: {
    navLinks: NavLinkInfo[];
  };
  functions: {
    getSectionKeyFromPath: (path: string) => string;
  };
}

function useHelpers(): Helpers {
  const lang = useContext(LangContext);

  const navLinks = useMemo<NavLinkInfo[]>(
    () => [
      {
        link: "/",
        text: lang.strings.home,
        eventKey: "home",
        moveCamTo: new Vector3(30, 30, 15),
        showInNavbar: true,
      },
      {
        link: "/about",
        text: lang.strings.about,
        eventKey: "about",
        moveCamTo: new Vector3(3, 12, 18),
        showInNavbar: true,
      },
      {
        link: "/showcase",
        text: lang.strings.showcase,
        eventKey: "showcase",
        moveCamTo: new Vector3(20, -40, -70),
        showInNavbar: true,
      },
      {
        link: "/contact",
        text: lang.strings.contact,
        eventKey: "contact",
        moveCamTo: new Vector3(60, 20, -20),
        showInNavbar: true,
      },
      {
        link: "/team",
        text: lang.strings.team,
        eventKey: "team",
        moveCamTo: new Vector3(90, 15, -5),
        showInNavbar: true,
      },
      {
        link: "/notfound",
        text: lang.strings.not_found,
        eventKey: "notfound",
        moveCamTo: new Vector3(30, 10, -15),
        showInNavbar: false,
      },
    ],
    [lang]
  );

  const getSectionKeyFromPath = useCallback(
    (path: string) => {
      let aux = path + "/";
      aux = aux.substring(1);
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
    constants: {
      navLinks: navLinks,
    },
    functions: {
      getSectionKeyFromPath: getSectionKeyFromPath,
    },
  };
}

export default useHelpers;
