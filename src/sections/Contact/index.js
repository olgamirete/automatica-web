import { useEffect, useRef, useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import CustomFormInput from '../../components/CustomForm/CustomFormInput';
import CustomSubmitButton from '../../components/CustomForm/CustomSubmitButton';
import InfoCard from '../../components/InfoCard';
import { ReactComponent as IconEmail } from './Icons/email.svg';
import { ReactComponent as IconTelephone } from './Icons/telephone.svg';
import { ReactComponent as IconWhatsApp } from './Icons/whatsapp.svg';

const status = {
    NULL: "null",
    SENT: "msgsent",
    ERROR: "error"
}

function Contact(props) {

    const formRef = useRef(null);

    const [messageStatus, setMessageStatus] = useState(status.NULL);

    useEffect(() => {
        switch (messageStatus) {
            case status.NULL:
                break;
            case status.SENT:
                alert("¡Tu mensaje ha sido enviado! Te enviaremos una respuesta por correo para confirmarte que lo hemos recibido correctamente.");
                formRef.current.reset();
                setMessageStatus(status.NULL);
                break;
            case status.ERROR:
                alert("Ocurrió un error al enviar tu mensaje. Puedes intentarlo nuevamente, o puedes llamarnos por teléfono, si lo prefieres.");
                break;
            default:
                break;
        }
    }, [messageStatus]);


    const handleSubmit = (e) => {

        // Prevent form submit
        e.preventDefault();

        // Get form data
        const form = e.currentTarget;
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData.entries());

        // Send data using the fetch api
        fetch("https://automaticaconsultora.com.ar/test_form.php", {
            method: 'post',
            body: JSON.stringify(formDataObj)
        })
            .then(function (response) {
                return response.text();
            })
            .then(function (text) {
                // console.log(text);
                setMessageStatus(status.SENT);
            })
            .catch(function (error) {
                console.log(error);
                setMessageStatus(status.ERROR);
            });

        // Prevent html form submit
        return false;

    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setMessageStatus(status.SENT);
    // }

    const inputFieldConfig = {
        className: "bg-light text-muted",
        bgOpacity: "7"
    }

    return (
        <InfoCard variant="dark" bgOpacity={6} className="border border-muted" >
            <h1 className="text-light mb-4 text-center">Contáctanos</h1>
            <Container fluid>
                <p className="text-light lead text-center">
                    ¡Nos encanta recibir consultas! Estamos para lo que necesites.
                </p>
                <Form ref={formRef} onSubmit={handleSubmit} >
                    <CustomFormInput
                        required
                        type="name"
                        name="name"
                        placeholder="Ingresa tu nombre"
                        label="Nombre"
                        className={inputFieldConfig.className}
                        bgOpacity={inputFieldConfig.bgOpacity}
                    />
                    <CustomFormInput
                        required
                        type="company"
                        name="company"
                        placeholder="Ingresa tu compañía"
                        label="Compañía"
                        className={inputFieldConfig.className}
                        bgOpacity={inputFieldConfig.bgOpacity}
                    />
                    <CustomFormInput
                        required
                        type="email"
                        name="email"
                        placeholder="Ingresa tu correo electrónico"
                        label="Correo electrónico"
                        className={inputFieldConfig.className}
                        bgOpacity={inputFieldConfig.bgOpacity}
                    />
                    <CustomFormInput
                        required
                        type="text"
                        name="message"
                        placeholder="Cuéntanos por qué nos escribes."
                        label="Mensaje"
                        as="textarea"
                        className={inputFieldConfig.className}
                        bgOpacity={inputFieldConfig.bgOpacity}
                    />
                    <CustomSubmitButton
                        variant="dark"
                        borderColor="light"
                    />
                    <Form.Text className="text-light text-center mt-3">
                        Si lo prefieres, también puedes comunicarte con nosotros a través de nuestros demás canales:
                    </Form.Text>
                    {/* <Container fluid> */}
                        {/* Llamada: <a href="tel:+54 9 342 5783 357" className="text-warning">+54 9 342 5783 357</a> */}
                        <Row className="justify-content-center mt-3" xs={6}>
                            <Col className="m-0 p-0" md="auto" >
                                <Button
                                    href="tel:+54 9 342 5783 357"
                                    variant="invisible"
                                    size="sm"
                                >
                                    {/* alt="Haz clic para llamarnos por teléfono" */}
                                    <IconTelephone fill="var(--light)" />
                                </Button>
                            </Col>
                            <Col className="m-0 p-0" md="auto">
                                <Button
                                    href="https://api.whatsapp.com/send?phone=+5493425783357"
                                    variant="invisible"
                                    size="sm"
                                >
                                    {/* alt="Haz clic para enviarnos un mensaje de WhatsApp" */}
                                    <IconWhatsApp fill="var(--light)" />
                                </Button>
                            </Col>
                            <Col className="m-0 p-0" md="auto" >
                                <Button
                                    href="mailto:contacto@automaticaconsultora.com"
                                    variant="invisible"
                                    size="sm"
                                >
                                    {/* alt="Haz clic para enviarnos un correo electrónico" */}
                                    <IconEmail fill="var(--light)" />
                                </Button>
                            </Col>
                        </Row>
                    {/* </Container> */}
                </Form>
            </Container >
        </InfoCard >
    );
}

export default Contact;