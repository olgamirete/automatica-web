import { Col, Container, Row } from "react-bootstrap";
import BackgroundJS from "components/BackgroundJS";
import NavBarAutomatica from "components/NavBarAutomatica";
import useCameraParams from "hooks/useCameraParams";
import Home from "sections/Home";
import Showcase from "sections/Showcase";
import About from "sections/About";
import Contact from "sections/Contact";
import Team from "sections/Team";
import { Routes, Route, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./App.css";
import useHelpers from "hooks/useHelpers";
import NotFound from "sections/NotFound";
import LangContext from "contexts/LangContext";
import useLanguage from "hooks/useLanguage";

// For internationalization, try and get the prefered language from the system.
// Also show option to change the language. If the language is changed, store
// the new setting with the localStorage api.

function App(props) {
  
  const [language, setLanguage] = useLanguage();

  let location = useLocation();
  const helpers = useHelpers();
  
  const [cameraParams, cameraFunctions] = useCameraParams(location);

  return (
    <LangContext.Provider value={language}>
      <div id={helpers.constants.mainAppId} className="vh-100 overflow-auto">
        <BackgroundJS cameraParams={cameraParams} />
        <NavBarAutomatica
          cameraFunctions={cameraFunctions}
          location={location}
          setLanguage={setLanguage}
        />

        <Container fluid>
          <Col id="content-container">
            <Row>
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={helpers.functions.getSectionKeyFromPath(
                    location.pathname
                  )}
                  classNames="fade"
                  onExited={helpers.functions.scrollToTop}
                  timeout={300}
                >
                  <Routes location={location}>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/showcase" element={<Showcase />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/team" element={<Team />} />
                    <Route element={<NotFound />} />
                  </Routes>
                </CSSTransition>
              </SwitchTransition>
            </Row>
          </Col>
        </Container>
      </div>
    </LangContext.Provider>
  );
}

export default App;
