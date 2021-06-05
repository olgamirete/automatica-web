import { useState, useRef, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AutomaticaLogo from './logo-v2.svg';
import './index.css';
import useHelpers from '../../hooks/useHelpers';

function NavBarAutomatica(props) {

    const navRef = useRef(null);
    const helpers = useHelpers();

    const path = props.location.pathname;
    const navLinks = helpers.constants.navLinks;
    const getKeyFromPath = helpers.functions.getSectionKeyFromPath;

    const [activeKey, setActiveKey] = useState(getKeyFromPath(path));
    
    useEffect(() => {
        // Location changed
        const newKey = getKeyFromPath(props.location.pathname);
        setActiveKey(newKey);
        setFlagExpanded(false);
    }, [props.location.pathname, getKeyFromPath]);

    const [flagExpanded, setFlagExpanded] = useState(false);

    return (
        <Navbar
            bg="light"
            expand="md"
            sticky="top"
            onToggle={() => setFlagExpanded((f) => !f)}
            expanded={flagExpanded}
        >
            <Navbar.Brand
                as={Link}
                href={navLinks[0].link}
                to={navLinks[0].link}
                // data-moveto={navLinks[0].moveCamTo}
                // onPointerDown={() => handleSelect(navLinks[0].eventKey, false, navLinks[0].moveCamTo)}
            >
                <img
                    src={AutomaticaLogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Automatica logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                    ref={navRef}
                    className="mr-auto"
                    activeKey={activeKey}
                    // onSelect={handleSelect}
                    defaultActiveKey={navLinks[0].eventKey}
                    >
                    {navLinks.map((nl, i) => {
                        const isActive = nl.eventKey === activeKey;
                        return (
                            <Nav.Link
                                key={i}
                                eventKey={nl.eventKey}
                                href={nl.link}
                                to={nl.link}
                                className={isActive ? 'active-link-custom border-warning' : ''}
                                // data-moveto={nl.moveCamTo}
                                as={Link}
                            >
                                {nl.text}
                            </Nav.Link>
                        );
                    })}
                    {/* <Nav.Link href="#showcase" data-moveto={[0, 10, 2]} onPointerDown={handleLinkClick} >Showcase</Nav.Link>
                    <Nav.Link href="#about" data-moveto={[20, 40, 7]} onPointerDown={handleLinkClick} >About</Nav.Link>
                    <Nav.Link href="#contact" data-moveto={[60, 10, 30]} onPointerDown={handleLinkClick} >Contact</Nav.Link> */}
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBarAutomatica;