import InfoCard from "@/components/InfoCard";
import ContactForm from "./ContactForm";
import SocialFooter from "./SocialFooter";
import FCi18n from "@/i18n/types/FCi18n";
import dictionary from "./dictionary";

const Contact: FCi18n<{}> = ({ lang }) => {
    const localeDict = dictionary[lang];
    return (
        <InfoCard className="bg-dark text-light border border-light">
            <h1 className="text-light mb-4 text-center">
                {localeDict.contact_us}
            </h1>
            <div className="container-fluid">
                <p className="text-light lead text-center">
                    {localeDict.we_love_to_hear_from_you}
                </p>
                <ContactForm lang={lang} />
            </div>
            <p className="text-light text-center mt-3 small">
                {localeDict.if_you_prefer_use_other_contact_channels}
            </p>
            <SocialFooter />
        </InfoCard>
    );
};

export default Contact;
