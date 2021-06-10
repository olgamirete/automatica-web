import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InfoCard from '../../components/InfoCard';

function Showcase(props) {
    return (
        <InfoCard variant="dark" bgOpacity={7} className="text-light border border-light" >
            <h1 className="mb-4 text-center">Servicios</h1>
            <p className="text-light lead text-center">
                Nuestro equipo te ayudará a <span className="font-weight-bold text-info">automatizar</span> tareas como:
            </p>
            <ListGroup variant="flush" className="text-center" >
                <ListGroup.Item className="bg-transparent border-secondary">
                    Actualización periódica de <span className="font-weight-bold text-warning">reportes</span> (diaria, semanal, mensual).
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-secondary">
                    Armado de <span className="font-weight-bold text-warning">tableros</span> en herramientas de <span className="font-weight-bold text-warning">Business Intelligence (BI)</span>.
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-secondary">
                    <span className="font-weight-bold text-warning">Extracción</span> regular de <span className="font-weight-bold text-warning">datos</span> de fuentes diversas.
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-secondary">
                    <span className="font-weight-bold text-warning">Generación</span> automática de <span className="font-weight-bold text-warning">documentos</span> basados en <span className="font-weight-bold text-warning">plantillas</span>.
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-secondary">
                    Mejora de <span className="font-weight-bold text-warning">procesos</span> para facilitar la <span className="font-weight-bold text-warning">recolección</span> de <span className="font-weight-bold text-warning">datos</span>.
                </ListGroup.Item>
            </ListGroup>
            {/* <p className="lead text-center mt-4">
                Estas tareas manuales llevan <span className="font-weight-bold text-pink">tiempo</span>, dan lugar a <span className="font-weight-bold text-pink">errores</span>, <span className="font-weight-bold text-pink">molestan</span> y <span className="font-weight-bold text-pink">desmotivan</span>.
            </p> */}
            {/* <p className="lead text-center">
                Por eso, si alguna de estas situaciones los describe, en <span className="text-info font-weight-bold">Automatica</span> podremos hacer mucho por vosotros.
            </p> */}
            <Row>
                <Col className="text-center">
                    <Button
                        variant="dark"
                        className="mt-3 border border-light"
                        href="/contact"
                        to="/contact"
                        as={Link}
                        >
                        ¡Pregúntanos sin compromiso!
                    </Button>
                </Col>
            </Row>
        </InfoCard>
    );
}

export default Showcase;