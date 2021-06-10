import { useRef } from 'react';
import { Form } from 'react-bootstrap';
import CustomFormInput from '../../../components/CustomForm/CustomFormInput';
import CustomSubmitButton from '../../../components/CustomForm/CustomSubmitButton';

function ContactForm(props) {

    const formRef = useRef(null);

    const status = props.statusDefs;
    
    const handleSubmit = (e) => {

        // Prevent form submit
        e.preventDefault();

        props.setMessageStatus(status.SENDING);

        // Get form data
        const form = e.currentTarget;
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData.entries());

        // Send data using the fetch api
        fetch("https://automaticaconsultora.com.ar/send_contact_email.php", {
            method: 'post',
            body: JSON.stringify(formDataObj)
        })
            .then(function (response) {
                return response.text();
            })
            .then(function (text) {
                // console.log(text);
                props.setMessageStatus(status.SENT);
            })
            .catch(function (error) {
                console.log(error);
                props.setMessageStatus(status.ERROR);
            });

        // Prevent html form submit
        return false;

    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.setMessageStatus(status.SENDING);
    //     const delayInMilliseconds = 1000;
    //     setTimeout(function() {
    //         props.setMessageStatus(status.SENT);
    //       }, delayInMilliseconds);
    // }

    const inputFieldConfig = {
        className: "bg-light text-muted",
        bgOpacity: "7"
    }

    return (
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
                flagSending={props.messageStatus === status.SENDING}
                borderColor="light"
            />
        </Form>
    );
}

export default ContactForm;