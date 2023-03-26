import ReactGA from "react-ga4";
import LangContext from "contexts/LangContext";
import { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import InfoCard from "components/InfoCard";

const Home: React.FC = () => {
  const lang = useContext(LangContext);
  useEffect(()=>{
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
  }, []);
  return (
    <InfoCard className="bg-dark text-light border border-light">
      <h1 className="text-light mb-4 text-center">Automatica</h1>
      <Row className="m-0 p-0 justify-content-center">
        <Col className="m-0 p-0" xs={12} md={10} lg={8}>
          {lang.elements.home_text}
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Link className="btn btn-dark mt-3 border border-light" to="/about">
            {lang.strings.see_how}
          </Link>
        </Col>
      </Row>
    </InfoCard>
  );
};

export default Home;
