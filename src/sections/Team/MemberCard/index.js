import { Card, Row, Col } from 'react-bootstrap';
import './index.css';
import { ReactComponent as IconLinkedIn } from '../icons/linkedin.svg';
import { ReactComponent as IconGitHub } from '../icons/github.svg';

function MemberCard(props) {

    return (
        <Col className="mb-4">
            <Card className="bg-transparent border-0 text-light">
                <Row className="flex-nowrap">
                    <Col className="d-flex align-items-center justify-content-center" xs={6}>
                        <Card.Img variant="top" src={props.picSrc} className="rounded rounded-circle max-height-profile-pic" />
                    </Col>
                    <Col className="pl-0">
                        <Card.Body className="pl-0">
                            <Card.Title className="mb-0">{props.name}</Card.Title>
                            <Card.Text className="font-weight-light text-nowrap mb-1">
                                {props.subtitle}
                            </Card.Text>
                            <Card.Text>
                                {/* <Container fluid className="px-0 d-flex justify-content-start"> */}
                                    {props.urlLinkedIn && <a href={props.urlLinkedIn} className="icon-social-team"><IconLinkedIn /></a>}
                                    {props.urlGitHub && <a href={props.urlGitHub} className="icon-social-team"><IconGitHub /></a>}
                                {/* </Container> */}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        <Card.Body>
                        </Card.Body>
                    </Col>
                </Row> */}
            </Card>
        </Col>
    );
}

export default MemberCard;