import { useEffect, useRef } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function InfoCard(props) {

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

    const bgColor = props.variant ? 'bg-' + props.variant : '';

    // let location = useLocation();

    return (
        <Container fluid className="mt-5" >
            <Row className='justify-content-center'>
                <Col xs={12} md={10} lg={6}>
                    <Jumbotron
                        ref={cardRef}
                        className={bgColor + ' bg-opacity-' + props.bgOpacity + ' ' + props.className}>
                        {props.children}
                    </Jumbotron>
                </Col>
            </Row>
        </Container >
    );
}

export default InfoCard;