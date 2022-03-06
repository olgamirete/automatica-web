import LangContext from "contexts/LangContext";
import { useContext } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import InfoCard from "components/InfoCard";

function Home(props) {
  const lang = useContext(LangContext);
  return (
    <InfoCard className="bg-dark text-light border border-light">
      <h1 className="text-light mb-4 text-center">Automatica</h1>
      <Row className="m-0 p-0 justify-content-center">
        <Col className="m-0 p-0" xs={12} md={10} lg={8}>
          {lang.home_text}
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            variant="dark"
            className="mt-3 border border-light"
            href="/about"
            to="/about"
            as={Link}
          >
            {lang.see_how}
          </Button>
        </Col>
      </Row>
    </InfoCard>
  );
}

export default Home;
