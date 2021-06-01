import { useEffect, useRef } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';

function InfoCard() {

    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            const elem = cardRef.current;
            for (let i = 0; i <= 10; i++) {
                if (cardRef.current.classList.contains("bg-opacity-" + i)) {
                    const currentColor = window.getComputedStyle(elem, null).getPropertyValue("background-color");
                    if (currentColor.includes("rgb(")) {
                        const newColor = currentColor.replace(")", ", " + (i === 10 ? "1" : ("0." + i)) + ")").replace("rgb(", "rgba(");
                        elem.style.setProperty("background-color", newColor, "important");
                    }
                }
            }
        }
    }, []);

    return (
        <Container fluid>
            <Row className='justify-content-center'>
                <Col xs={12} md={10} lg={8}>
                    <Jumbotron
                        ref={cardRef}
                        className="bg-dark bg-opacity-6">
                        <h1 className="text-light mb-4">Automatica</h1>
                        <p className="text-light lead">
                            Hay una manera <span className="text-warning font-weight-bold">más simple</span> de hacer las cosas que te molestan, y en <span className="text-info font-weight-bold">Automatica</span> te vamos a ayudar a encontrarla.
                        </p>
                        <Button
                            variant="info"
                            className="mt-3"
                            >
                                ¡Mirá lo que dicen nuestros clientes!
                        </Button>
                    </Jumbotron>
                </Col>
            </Row>
        </Container >
    );
}

export default InfoCard;