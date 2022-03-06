import { useContext, useRef } from "react";
import { Form } from "react-bootstrap";
import CustomFormInput from "components/CustomForm/CustomFormInput";
import CustomSubmitButton from "components/CustomForm/CustomSubmitButton";
import LangContext from "contexts/LangContext";

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
    fetch("https://automaticaconsultora.com/send_contact_email.php", {
      method: "post",
      body: JSON.stringify(formDataObj),
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
  };

  const inputFieldClasses = "bg-light text-muted";
  const lang = useContext(LangContext);

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <CustomFormInput
        required
        type="name"
        name="name"
        placeholder={lang.enter_your_name}
        label={lang.name}
        className={inputFieldClasses}
      />
      <CustomFormInput
        required
        type="company"
        name="company"
        placeholder={lang.enter_your_company}
        label={lang.company}
        className={inputFieldClasses}
      />
      <CustomFormInput
        required
        type="email"
        name="email"
        placeholder={lang.enter_your_email_address}
        label={lang.email}
        className={inputFieldClasses}
      />
      <CustomFormInput
        required
        type="text"
        name="message"
        placeholder={lang.tell_us_why_you_write}
        label={lang.message}
        as="textarea"
        className={inputFieldClasses}
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
