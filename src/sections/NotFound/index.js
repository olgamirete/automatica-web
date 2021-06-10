import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InfoCard from '../../components/InfoCard';

function NotFound(props) {
    return (
        <InfoCard variant="dark" bgOpacity={6} className="border border-light" >
            <h1 className="text-light mb-4 text-center">404</h1>
            <Row className="m-0 p-0 justify-content-center" >
                <Col className="m-0 p-0" xs={12} md={10} lg={8}>
                    <p className="text-light lead text-center">
                        Parece que esta página no existe. ¡No te preocupes! Puedes ir al <Link to="/" className="font-weight-bold">inicio</Link> para ver si encuentras lo que buscabas, o escribirnos a través de la sección de <Link to="/contact" className="font-weight-bold">contacto</Link>, para que podamos ayudarte.
                    </p>
                </Col>
            </Row>
        </InfoCard>
    );
}

export default NotFound;