import "./index.css";
import { useState, useRef, useEffect, FC } from "react";
import AutomaticaLogo from "@/assets/svg/logo.svg";
import useHelpers from "@/hooks/useHelpers";
import LanguageSelector from "@/components/ui/LanguageSelector";
import useNavLinks from "@/hooks/useNavLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useLocale from "@/i18n/useLocale";

export interface NavBarAutomaticaProps {
    cameraFunctions: any;
}

const NavBarAutomatica: FC<NavBarAutomaticaProps> = ({
    cameraFunctions,
    ...props
}) => {
    const navRef = useRef(null);
    const helpers = useHelpers();

    const pathname = usePathname();
    const lang = useLocale();

    const navLinks = useNavLinks(lang);
    const getKeyFromPath = helpers.functions.getSectionKeyFromPath;

    const [activeKey, setActiveKey] = useState(getKeyFromPath(pathname));

    useEffect(() => {
        // Location changed
        const newKey = getKeyFromPath(pathname);
        setActiveKey(newKey);
        setFlagExpanded(false);
    }, [pathname, getKeyFromPath]);

    const [flagExpanded, setFlagExpanded] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-md sticky-top bg-light px-3">
                <Link className="navbar-brand" href={`/${lang}`}>
                    {" "}
                    <AutomaticaLogo
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Automatica logo"
                    />
                </Link>
                <LanguageSelector lang={lang} className="d-md-none" />
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarSupportedContent"
                    aria-expanded={flagExpanded}
                    aria-label="Toggle navigation"
                    onClick={() => setFlagExpanded((prev) => !prev)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`
                            collapse navbar-collapse
                            ${flagExpanded ? "show" : ""}
                        `}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navLinks
                            .filter((x) => x.showInNavbar)
                            .map((nl, i) => {
                                const isActive = nl.eventKey === activeKey;
                                return (
                                    <li
                                        key={i}
                                        className={`
                                                nav-item
                                                ${
                                                    isActive
                                                        ? "border-warning active-link-custom"
                                                        : ""
                                                }
                                            `}
                                    >
                                        <Link
                                            className={`
                                                nav-link
                                                ${
                                                    isActive
                                                        ? "active"
                                                        : ""
                                                }
                                            `}
                                            aria-current="page"
                                            href={`/${lang}${nl.link}`}
                                        >
                                            {nl.text}
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                <LanguageSelector lang={lang} className="d-none d-md-block" />
            </nav>
        </>
    );
};

export default NavBarAutomatica;
