import InfoCard from '../../components/InfoCard';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import LangContext from 'contexts/LangContext';

function About(props) {
    
    const lang = useContext(LangContext);

    return (
        <InfoCard className="bg-dark text-light border border-light" >
            <h1 className="mb-4 text-center">{lang.about}</h1>
            {lang.about_text}
            <Row>
                <Col className="text-center">
                    <Button
                        variant="dark"
                        className="mt-3 border border-light"
                        href="/showcase"
                        to="/showcase"
                        as={Link}
                        >
                        {lang.how_to_know_if_we_can_help}
                    </Button>
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
}

export default About;