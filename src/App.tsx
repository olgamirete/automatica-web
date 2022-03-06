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
import LangContext, { availableLanguages } from "contexts/LangContext";
import useLanguage from "hooks/useLanguage";
import React, { Fragment, ReactElement } from "react";

// For internationalization, try to get the prefered language from the system.

interface Section {
  path: String;
  element: ReactElement;
}

const App: React.FC = () => {
  const [language, setLanguage] = useLanguage();

  let location = useLocation();
  const helpers = useHelpers();

  const [cameraParams, cameraFunctions] = useCameraParams(location);

  const sections: Array<Section> = [
    { path: "/about", element: <About /> },
    { path: "/showcase", element: <Showcase /> },
    { path: "/contact", element: <Contact /> },
    { path: "/team", element: <Team /> },
  ];

  return (
    <LangContext.Provider value={language}>
      <div id={helpers.constants.mainAppId} className="vh-100 overflow-auto">
        <BackgroundJS cameraParams={cameraParams} />
        <NavBarAutomatica
          cameraFunctions={cameraFunctions}
          location={location}
          setLanguage={setLanguage}
        />

        <div className="container-fluid">
          <div className="col" id="content-container">
            <div className="row">
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
                    <Route path="/" element={<Home />} />
                    {availableLanguages.map((avLang, i_lang) => (
                      <Fragment key={i_lang}>
                        <Route path={`/${avLang._code}`} element={<Home />} />
                        {sections.map((section, i_section) => (
                          <Fragment
                            key={`${i_lang}_${i_section}_${avLang._code}`}
                          >
                            <Route
                              path={`/${avLang._code}${section.path}`}
                              element={section.element}
                            />
                            <Route
                              path={`${section.path}`}
                              element={section.element}
                            />
                          </Fragment>
                        ))}
                      </Fragment>
                    ))}
                    <Route element={<NotFound />} />
                  </Routes>
                </CSSTransition>
              </SwitchTransition>
            </div>
          </div>
        </div>
      </div>
    </LangContext.Provider>
  );
};

export default App;
