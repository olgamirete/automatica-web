import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { Nav, Navbar, NavbarProps } from "react-bootstrap";
import { Link } from "react-router-dom";
import AutomaticaLogo from "assets/svg/logo.svg";
import "./index.css";
import useHelpers from "hooks/useHelpers";
import LanguageSelector from "components/LanguageSelector";

export interface NavBarAutomaticaProps extends NavbarProps {
  cameraFunctions: any;
  location: any;
  setLanguage: Dispatch<SetStateAction<string>>;
}

const NavBarAutomatica: React.FC<NavBarAutomaticaProps> = ({
  cameraFunctions,
  location,
  setLanguage,
  ...props
}) => {
  const navRef = useRef(null);
  const helpers = useHelpers();

  const path = location.pathname;
  const navLinks = helpers.constants.navLinks;
  const getKeyFromPath = helpers.functions.getSectionKeyFromPath;

  const [activeKey, setActiveKey] = useState(getKeyFromPath(path));

  useEffect(() => {
    // Location changed
    const newKey = getKeyFromPath(location.pathname);
    setActiveKey(newKey);
    setFlagExpanded(false);
  }, [location.pathname, getKeyFromPath]);

  const [flagExpanded, setFlagExpanded] = useState(false);

  return (
    <Navbar
      bg="light"
      expand="md"
      sticky="top"
      onToggle={() => setFlagExpanded((f) => !f)}
      expanded={flagExpanded}
      className="px-3"
    >
      <Navbar.Brand as={Link} href={navLinks[0].link} to={navLinks[0].link}>
        <img
          src={AutomaticaLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Automatica logo"
        />
      </Navbar.Brand>
      <LanguageSelector setLanguage={setLanguage} className="d-md-none" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          ref={navRef}
          className="me-auto"
          activeKey={activeKey}
          defaultActiveKey={navLinks[0].eventKey}
        >
          {navLinks
            .filter((x) => x.showInNavbar)
            .map((nl, i) => {
              const isActive = nl.eventKey === activeKey;
              return (
                <Nav.Link
                  key={i}
                  eventKey={nl.eventKey}
                  to={nl.link}
                  className={
                    isActive ? "border-warning active-link-custom" : ""
                  }
                  as={Link}
                >
                  {nl.text}
                </Nav.Link>
              );
            })}
        </Nav>
      </Navbar.Collapse>
      <LanguageSelector
        setLanguage={setLanguage}
        className="d-none d-md-block"
      />
    </Navbar>
  );
};

export default NavBarAutomatica;
