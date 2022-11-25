import { useContext } from "react";
import CustomFormInput from "components/CustomForm/CustomFormInput";
import CustomSubmitButton from "components/CustomForm/CustomSubmitButton";
import LangContext from "contexts/LangContext";
import CustomTextAreaInput from "components/CustomForm/CustomTextAreaInput";
import useContactForm from "./useContactForm";
import AlertMessage from "../AlertMessage";
import ReCaptcha from "react-google-recaptcha";

const ContactForm: React.FC = () => {
  const {
    formRef,
    handleSubmit,
    messageStatus,
    loadingCaptcha,
    setLoadingCaptcha,
  } = useContactForm();
  const lang = useContext(LangContext);

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="px-2">
        <div className="row gx-2">
          <CustomFormInput
            required
            type="text"
            name="first_name"
            placeholder={lang.strings.enter_your_first_name}
            label={lang.strings.first_name}
            className="bg-light bg-opacity-50"
            containerClassName="col-12 col-sm-6"
            labelClassName="text-dark"
          />
          <CustomFormInput
            required
            type="text"
            name="last_name"
            placeholder={lang.strings.enter_your_last_name}
            label={lang.strings.last_name}
            className="bg-light bg-opacity-50"
            containerClassName="col-12 col-sm-6"
            labelClassName="text-dark"
          />
        </div>
        <CustomFormInput
          required
          type="text"
          name="company"
          placeholder={lang.strings.enter_your_company}
          label={lang.strings.company}
          className="bg-light bg-opacity-50"
          containerClassName="mt-2"
          labelClassName="text-dark"
        />
        <CustomFormInput
          required
          type="email"
          name="email"
          placeholder={lang.strings.enter_your_email_address}
          label={lang.strings.email}
          className="bg-light bg-opacity-50"
          containerClassName="mt-2"
          labelClassName="text-dark"
        />
        <CustomTextAreaInput
          required
          name="message"
          placeholder={lang.strings.tell_us_why_you_write}
          label={lang.strings.message}
          className="bg-light bg-opacity-50"
          containerClassName="mt-2"
          labelClassName="text-dark"
        />
        <div
          className={`
          mt-3 d-flex justify-content-center align-items-center
          ${loadingCaptcha ? "d-none" : ""}
        `}
        >
          <ReCaptcha
            sitekey="6Le_JzEjAAAAAG_cagoUIoQW6hxKnAfe4sS7g9Th"
            asyncScriptOnLoad={() => setLoadingCaptcha(false)}
          />
        </div>
        <CustomSubmitButton
          variant="dark"
          sending={messageStatus === "sending"}
          borderColor="light"
          className="mt-3 w-100"
        />
        {(messageStatus === "error" || messageStatus === "sent") && (
          <AlertMessage status={messageStatus} />
        )}
      </form>
    </>
  );
};

export default ContactForm;
