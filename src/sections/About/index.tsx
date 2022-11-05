import InfoCard from "components/InfoCard";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LangContext from "contexts/LangContext";

const About: React.FC = () => {
  const lang = useContext(LangContext);

  return (
    <InfoCard className="bg-dark text-light border border-light">
      <h1 className="mb-4 text-center">{lang.strings.about}</h1>
      {lang.elements.about_text}
      <Row>
        <Col className="text-center">
          <Link
            className="btn btn-dark mt-3 border border-light"
            to="/showcase"
          >
            {lang.strings.how_to_know_if_we_can_help}
          </Link>
        </Col>
      </Row>
      {/* <h1 className="mb-4 mt-4 text-center">Nuestra <span className="">misión</span>:</h1>
            <p className="lead text-center">
                Mejorar la calidad de vida de las personas.
            </p> */}
      {/* <p className="lead text-center">
                Nuestra <span className="fw-bold text-danger">misión</span>, mejorar la calidad de vida de las personas.
            </p> */}
      {/* <p className="lead text-center">
                Creemos <span className="fw-bold text-warning">Nadie</span> debería tener que hacer <span className="text-danger fw-bold">tareas repetitivas</span> y <span className="text-danger fw-bold">manuales</span> en su trabajo, y por eso creamos Automatica.
            </p> */}
    </InfoCard>
  );
};

export default About;
