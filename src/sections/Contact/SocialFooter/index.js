import { Row, Col, Button } from 'react-bootstrap';
import { ReactComponent as IconEmail } from './Icons/email.svg';
import { ReactComponent as IconTelephone } from './Icons/telephone.svg';
import { ReactComponent as IconWhatsApp } from './Icons/whatsapp.svg';

function SocialFooter() {
    return (
        <Row className="justify-content-center mt-3" xs={6}>
            <Col className="m-0 p-0 text-center" md="auto" >
                <Button
                    href="tel:+54 9 342 5783 357"
                    variant="invisible"
                    size="sm"
                >
                    <IconTelephone fill="var(--light)" />
                </Button>
            </Col>
            <Col className="m-0 p-0 text-center" md="auto">
                <Button
                    href="https://api.whatsapp.com/send?phone=+5493425783357"
                    variant="invisible"
                    size="sm"
                >
                    <IconWhatsApp fill="var(--light)" />
                </Button>
            </Col>
            <Col className="m-0 p-0 text-center" md="auto" >
                <Button
                    href="mailto:contacto@automaticaconsultora.com"
                    variant="invisible"
                    size="sm"
                >
                    <IconEmail fill="var(--light)" />
                </Button>
            </Col>
        </Row>
    );
}

export default SocialFooter;