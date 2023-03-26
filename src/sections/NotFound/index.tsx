import ReactGA from 'react-ga4';
import LangContext from "contexts/LangContext";
import { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import InfoCard from "components/InfoCard";

const NotFound: React.FC = () => {
  const lang = useContext(LangContext);
  useEffect(()=>{
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: "/not-found", title: "Not found" });
  }, []);
  return (
    <InfoCard className="bg-dark text-light border border-light">
      <h1 className="text-light mb-4 text-center">404</h1>
      <Row className="m-0 p-0 justify-content-center">
        <Col className="m-0 p-0" xs={12} md={10} lg={8}>
          <p className="text-light lead text-center">
            {lang.elements.it_looks_like_this_page_does_not_exist}
          </p>
        </Col>
      </Row>
    </InfoCard>
  );
};

export default NotFound;
