import { useContext } from "react";
import InfoCard from "components/InfoCard";
import ContactForm from "./ContactForm";
import SocialFooter from "./SocialFooter";
import "./index.css";
import LangContext from "contexts/LangContext";

const Contact = () => {
  const lang = useContext(LangContext);

  return (
    <InfoCard className="bg-dark text-light border border-light">
      <h1 className="text-light mb-4 text-center">{lang.strings.contact_us}</h1>
      <div className="container-fluid">
        <p className="text-light lead text-center">
          {lang.strings.we_love_to_hear_from_you}
        </p>
        <ContactForm />
      </div>
      <p className="text-light text-center mt-3 small">
        {lang.strings.if_you_prefer_use_other_contact_channels}
      </p>
      <SocialFooter />
    </InfoCard>
  );
};

export default Contact;
