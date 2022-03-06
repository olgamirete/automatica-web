import { useContext, useState } from "react";
import InfoCard from "components/InfoCard";
import ContactForm from "./ContactForm";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import SocialFooter from "./SocialFooter";
import "./index.css";
import LangContext from "contexts/LangContext";

const status = {
  NULL: "null",
  SENDING: "sending",
  SENT: "msgsent",
  ERROR: "error",
};

function Contact(props) {
  const [messageStatus, setMessageStatus] = useState(status.NULL);
  const lang = useContext(LangContext);

  function AlertMessage(props) {
    switch (props.messageStatus) {
      case status.SENT:
        return (
          <div role="alert" class="mt-3 alert alert-light">
            {lang.message_sent_success}
          </div>
        );
      case status.ERROR:
        return (
          <div role="alert" class="mt-3 alert alert-danger">
            {lang.message_sent_error}
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <InfoCard className="bg-dark text-light border border-light">
      <h1 className="text-light mb-4 text-center">{lang.contact_us}</h1>
      <div className="container-fluid">
        <p className="text-light lead text-center">
          {lang.we_love_to_hear_from_you}
        </p>
        {messageStatus !== status.SENT && (
          <ContactForm
            statusDefs={status}
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
            <AlertMessage messageStatus={messageStatus} />
          </CSSTransition>
        </SwitchTransition>
      </div>
      <p className="text-light text-center mt-3 small">
        {lang.if_you_prefer_use_other_contact_channels}
      </p>
      <SocialFooter />
    </InfoCard>
  );
}

export default Contact;
