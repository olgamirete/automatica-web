import { Container, Row, Col } from 'react-bootstrap';

function InfoCard(props) {
    return (
        <Container fluid className="my-5" >
            <Row className='justify-content-center'>
                <Col xs={12} md={10} lg={6}>
                    <div
                        className={`info-card rounded py-5 px-3 bg-opacity-50 ${props.className}`}>
                        {props.children}
                    </div>
                </Col>
            </Row>
        </Container >
    );
}

export default InfoCard;