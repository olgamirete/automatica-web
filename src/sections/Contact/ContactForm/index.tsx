import { useCallback, useContext, useRef } from "react";
import { Form } from "react-bootstrap";
import CustomFormInput from "components/CustomForm/CustomFormInput";
import CustomSubmitButton from "components/CustomForm/CustomSubmitButton";
import LangContext from "contexts/LangContext";
import CustomTextAreaInput from "components/CustomForm/CustomTextAreaInput";
import { FormStatus } from "types/forms";

export interface ContactFormProps {
  messageStatus: FormStatus;
  setMessageStatus: (status: FormStatus) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ messageStatus, setMessageStatus }) => {
  const formRef = useRef(null);
  const lang = useContext(LangContext);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback((e) => {
    // Prevent form submit
    e.preventDefault();

    setMessageStatus("sending");

    // Get form data
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('date', (new Date()).toLocaleDateString(lang._locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));
    formData.set('locale', lang._locale?.toString() ?? 'en-UK');

    const data = new URLSearchParams();
    formData.forEach((value, key) => {
      data.append(key, value.toString());
    });

    // Send data using the fetch api
    fetch("https://automatica.com.ar/send_contact_email.php", {
      method: "post",
      body: data,
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (text: string) {
        // console.log(text);
        setMessageStatus("sent");
      })
      .catch(function (error) {
        console.log(error);
        setMessageStatus("error");
      });

    // Prevent html form submit
    return false;
  }, [lang, setMessageStatus]);

  const inputFieldClasses = "bg-light py-2";
  
  return (
    <Form ref={formRef} onSubmit={handleSubmit} className="px-2">
      <div className="row gx-2">
        <CustomFormInput
          required
          type="text"
          name="first_name"
          placeholder={lang.strings.enter_your_first_name}
          label={lang.strings.first_name}
          className={inputFieldClasses}
          containerClassName="col-12 col-sm-6"
        />
        <CustomFormInput
          required
          type="text"
          name="last_name"
          placeholder={lang.strings.enter_your_last_name}
          label={lang.strings.last_name}
          className={inputFieldClasses}
          containerClassName="col-12 col-sm-6"
        />
      </div>
      <CustomFormInput
        required
        type="text"
        name="company"
        placeholder={lang.strings.enter_your_company}
        label={lang.strings.company}
        className={inputFieldClasses}
      />
      <CustomFormInput
        required
        type="email"
        name="email"
        placeholder={lang.strings.enter_your_email_address}
        label={lang.strings.email}
        className={inputFieldClasses}
      />
      <CustomTextAreaInput
        required
        name="message"
        placeholder={lang.strings.tell_us_why_you_write}
        label={lang.strings.message}
        className={inputFieldClasses}
      />
      <CustomSubmitButton
        variant="dark"
        sending={messageStatus === "sending"}
        borderColor="light"
      />
    </Form>
  );
};

export default ContactForm;
