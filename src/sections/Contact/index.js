import { useState } from 'react';
import { Container } from 'react-bootstrap';
import InfoCard from '../../components/InfoCard';
import ContactForm from './ContactForm';
import {
    SwitchTransition,
    CSSTransition
} from "react-transition-group";
import SocialFooter from './SocialFooter';
import './index.css';

const status = {
    NULL: "null",
    SENDING: "sending",
    SENT: "msgsent",
    ERROR: "error"
}

function Contact(props) {

    const [messageStatus, setMessageStatus] = useState(status.NULL);

    function AlertMessage(props) {
        switch (props.messageStatus) {
            case status.SENT:
                return (
                    <div role="alert" class="mt-3 alert alert-light">
                        ¡Tu mensaje ha sido enviado! Te enviaremos una respuesta por correo para confirmarte que lo hemos recibido correctamente.
                    </div>
                );
            case status.ERROR:
                return (
                    <div role="alert" class="mt-3 alert alert-danger">
                        Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo más tarde, o utiliza alguno de nuestros canales alternativos.
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <InfoCard variant="dark" bgOpacity={6} className="border border-muted" >
            <h1 className="text-light mb-4 text-center">Contáctanos</h1>
            <Container fluid>
                <p className="text-light lead text-center">
                    ¡Nos encanta recibir consultas! Estamos para lo que necesites.
                </p>
                {messageStatus !== status.SENT && (
                    <ContactForm
                        statusDefs={status}
                        messageStatus={messageStatus}
                        setMessageStatus={setMessageStatus} />)}
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={messageStatus}
                        classNames="tester"
                        // onExited={() => false}
                        timeout={300}
                    >
                        <AlertMessage messageStatus={messageStatus} />
                    </CSSTransition>
                </SwitchTransition>
            </Container >
            <p className="text-light text-center mt-3 small">
                Si lo prefieres, también puedes comunicarte con nosotros a través de nuestros demás canales:
            </p>
            <SocialFooter />
        </InfoCard >
    );
}

export default Contact;