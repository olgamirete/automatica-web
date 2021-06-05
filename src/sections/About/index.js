import InfoCard from '../../components/InfoCard';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <InfoCard variant="dark" bgOpacity={8} className="text-light border border-light" >
            <h1 className="mb-4 text-center">¿Qué hacemos?</h1>
            <p className="lead text-center">
                Nuestro <span className="text-warning font-weight-bold">objetivo</span> es ayudar a las empresas a <span className="text-info font-weight-bold">automatizar su trabajo</span>,
                para que no tengan que perder el tiempo haciendo tareas repetitivas o
                engorrosas.
            </p>
            <p className="lead text-center lead tex">
                Luego de trabajar con nosotros, muchas de <span className="font-weight-bold text-pink">sus tareas se harán solas y en menor tiempo</span>, mientras ustedes se preparan el café.
            </p>
            <Row>
                <Col className="text-center">
                    <Button
                        variant="dark"
                        className="mt-3 border border-light"
                        href="/showcase"
                        to="/showcase"
                        as={Link}
                        >
                        ¿Cómo saber si me pueden ayudar?
                    </Button>
                </Col>
            </Row>
            {/* <h1 className="mb-4 mt-4 text-center">Nuestra <span className="">misión</span>:</h1>
            <p className="lead text-center">
                Mejorar la calidad de vida de las personas.
            </p> */}
            {/* <p className="lead text-center">
                Nuestra <span className="font-weight-bold text-danger">misión</span>, mejorar la calidad de vida de las personas.
            </p> */}
            {/* <p className="lead text-center">
                Creemos <span className="font-weight-bold text-warning">Nadie</span> debería tener que hacer <span className="text-danger font-weight-bold">tareas repetitivas</span> y <span className="text-danger font-weight-bold">manuales</span> en su trabajo, y por eso creamos Automatica.
            </p> */}
        </InfoCard>
    );
}

export default About;