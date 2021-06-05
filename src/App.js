import { Col, Container, Row } from 'react-bootstrap';
import BackgroundJS from './components/BackgroundJS';
import NavBarAutomatica from './components/NavBarAutomatica';
import useCameraParams from './hooks/useCameraParams';
import Home from './sections/Home';
import Showcase from './sections/Showcase';
import About from './sections/About';
import Contact from './sections/Contact';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import {
  SwitchTransition,
  CSSTransition
  // TransitionGroup
} from "react-transition-group";
import './App.css';
import useHelpers from './hooks/useHelpers';

// For internationalization, try and get the prefered language from the system.
// Also show option to change the language. If the language is changed, store
// the new setting with the localStorage api.

function App(props) {

  let location = useLocation();
  const helpers = useHelpers();

  const [cameraParams, cameraFunctions] = useCameraParams(location);
  // alert(location.key);
  return (
    <div id={helpers.constants.mainAppId} className="vh-100 overflow-auto">
      <BackgroundJS
        cameraParams={cameraParams} />
      <NavBarAutomatica cameraFunctions={cameraFunctions} location={location} />
      {/* <Col id="content-container" className="h-100 m-0 p-0 overflow-auto"> */}
      <Container fluid>
        <Col id="content-container" >
          <Row>
            {/* <Container id="sub-container" className=""> */}
            <SwitchTransition mode="out-in">
            {/* <TransitionGroup> */}
              {/*
            This is no different than other usage of
            <CSSTransition>, just make sure to pass
            `location` to `Switch` so it can match
            the old location as it animates out.
          */}
              <CSSTransition
                key={helpers.functions.getSectionKeyFromPath(location.pathname)}
                classNames="fade"
                onExited={helpers.functions.scrollToTop}
                timeout={300}
              >
                <Switch location={location} >
                  <Route exact path="/" >
                    <Home />
                  </Route>
                  <Route path="/about" >
                    <About />
                  </Route>
                  <Route path="/showcase" >
                    <Showcase />
                  </Route>
                  <Route path="/contact" >
                    <Contact />
                  </Route>
                </Switch>
              </CSSTransition>
            {/* </TransitionGroup> */}
            </SwitchTransition>
            {/* </Container> */}
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
