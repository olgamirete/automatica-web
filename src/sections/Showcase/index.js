import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InfoCard from '../../components/InfoCard';

function Showcase(props) {
    return (
        <InfoCard variant="dark" bgOpacity={7} className="text-light border border-light" >
            <h1 className="mb-4 text-center">¿Te pasa que...</h1>
            <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="bg-transparent border-secondary">
                    ...<span className="font-weight-bold text-warning">consultas</span> regularmente <span className="font-weight-bold text-warning">información</span> de <span className="font-weight-bold text-warning">distintas fuentes</span>?
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-secondary">
                    ...<span className="font-weight-bold text-warning">recopilas datos</span> de la competencia para hacer <span className="font-weight-bold text-warning">benchmarking</span>?
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-secondary">
                    ...<span className="font-weight-bold text-warning">preparas reportes</span> periódicos?
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-secondary">
                    ...<span className="font-weight-bold text-warning">utilizas plantillas</span>, pero completarlas te lleva tiempo?
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent border-secondary">
                    ...realizas una o varias tareas que te <span className="font-weight-bold text-warning">molestan</span> y te <span className="font-weight-bold text-warning">cansan</span>?
                </ListGroup.Item>
            </ListGroup>
            <p className="lead text-center mt-4">
                Las tareas manuales llevan <span className="font-weight-bold text-pink">tiempo</span>, dan lugar a <span className="font-weight-bold text-pink">errores</span>, <span className="font-weight-bold text-pink">molestan</span> y <span className="font-weight-bold text-pink">desmotivan</span>.
            </p>
            <p className="lead text-center">
                Por eso, si alguna de estas situaciones te describe, en <span className="text-info font-weight-bold">Automatica</span> podemos hacer mucho por vos.
            </p>
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