import { useState, useRef } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
// import './index.css';
import AutomaticaLogo from './logo-v2.svg';

function NavBarAutomatica(props) {

    const navRef = useRef(null);

    const navLinks = [
        { link: "#home", text: "Home", eventKey: "home", moveCamTo: [30, 30, 15] },
        { link: "#showcase", text: "Showcase", eventKey: "showcase", moveCamTo: [20, -40, -70] },
        { link: "#about", text: "About", eventKey: "about", moveCamTo: [3, 12, 18] },
        { link: "#contact", text: "Contact", eventKey: "contact", moveCamTo: [90, 15, -5] }
    ]

    const [activeKey, setActiveKey] = useState(navLinks[0].eventKey);

    const handleLinkClick = (e) => {
        // alert(e.target.eventKey);

        const moveTo = e.target.dataset["moveto"].split(",");
        props.cameraFunctions.setPos({
            x: moveTo[0],
            y: moveTo[1],
            z: moveTo[2]
        });
    }

    const handleSelect = (selectedKey, e) => {
        setActiveKey(selectedKey);

        const moveTo = e.target.dataset["moveto"].split(",");
        props.cameraFunctions.setPos({
            x: moveTo[0],
            y: moveTo[1],
            z: moveTo[2]
        });
    }

    return (
        <Navbar bg="light" expand="md">
            <Navbar.Brand href="#home">
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
                    onSelect={handleSelect}
                    defaultActiveKey={navLinks[0].eventKey}
                    variant="" >
                    {navLinks.map((nl, i) => {
                        const isActive = nl.eventKey === activeKey;
                        return (
                            <Nav.Link
                                key={i}
                                eventKey={nl.eventKey}
                                href={nl.link}
                                data-moveto={nl.moveCamTo}
                                // onPointerDown={handleLinkClick}
                                variant="warning"
                            // className={isActive ? 'bg-warning' : ''}
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