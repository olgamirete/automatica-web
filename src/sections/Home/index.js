import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InfoCard from '../../components/InfoCard';

function Home(props) {
    return (
        <InfoCard variant="dark" bgOpacity={6} className="border border-light" >
            <h1 className="text-light mb-4 text-center">Automatica</h1>
            <Row className="m-0 p-0 justify-content-center" >
                <Col className="m-0 p-0" xs={12} md={10} lg={8}>
                    {/* <p className="text-light lead text-center">
                        Hay una manera <span className="text-warning font-weight-bold">más simple</span> de hacer las cosas que te molestan, y en <span className="text-info font-weight-bold">Automatica</span> te vamos a ayudar a encontrarla.
                    </p> */}
                    <p className="text-light lead text-center">
                        Hay una manera <span className="text-warning font-weight-bold">más simple</span> de hacer las cosas que te llevan tiempo, y en <span className="text-info font-weight-bold">Automatica</span> te vamos a ayudar a encontrarla.
                    </p>
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
                        ¡Mira cómo!
                    </Button>
                </Col>
            </Row>
        </InfoCard>
    );
}

export default Home;