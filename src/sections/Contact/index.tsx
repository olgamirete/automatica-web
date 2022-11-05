import { useContext, useState } from "react";
import InfoCard from "components/InfoCard";
import ContactForm from "./ContactForm";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import SocialFooter from "./SocialFooter";
import "./index.css";
import LangContext from "contexts/LangContext";
import { FormStatus } from "types/forms";

export interface ContactProps {}

const AlertMessage: React.FC<{ status: FormStatus }> = ({ status }) => {
  const lang = useContext(LangContext);
  switch (status) {
    case "sent":
      return (
        <div role="alert" className="mt-3 alert alert-light">
          {lang.strings.message_sent_success}
        </div>
      );
    case "error":
      return (
        <div role="alert" className="mt-3 alert alert-danger">
          {lang.strings.message_sent_error}
        </div>
      );
    default:
      return null;
  }
};

const Contact = () => {
  const [messageStatus, setMessageStatus] = useState<FormStatus>("null");
  const lang = useContext(LangContext);

  return (
    <InfoCard className="bg-dark text-light border border-light">
      <h1 className="text-light mb-4 text-center">{lang.strings.contact_us}</h1>
      <div className="container-fluid">
        <p className="text-light lead text-center">
          {lang.strings.we_love_to_hear_from_you}
        </p>
        {messageStatus !== "sent" && (
          <ContactForm
            messageStatus={messageStatus}
            setMessageStatus={setMessageStatus}
          />
        )}
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={messageStatus}
            classNames="tester"
            // onExited={() => false}
            timeout={300}
          >
            <AlertMessage status={messageStatus} />
          </CSSTransition>
        </SwitchTransition>
      </div>
      <p className="text-light text-center mt-3 small">
        {lang.strings.if_you_prefer_use_other_contact_channels}
      </p>
      <SocialFooter />
    </InfoCard>
  );
};

export default Contact;
