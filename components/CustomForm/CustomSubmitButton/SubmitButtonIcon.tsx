import IconSend from "./sendButton.svg";
import FCi18n from "@/i18n/types/FCi18n";
import dictionary from "./dictionary";

const SubmitButtonIcon: FCi18n<{ sending: boolean }> = ({ sending, lang }) => {
    const localeDict = dictionary[lang];

    if (sending) {
        return (
            <div
                className="spinner-border spinner-border-sm text-light"
                role="status"
            >
                <span className="visually-hidden">{localeDict.sending}</span>
            </div>
        );
    } else {
        return (
            <IconSend
                width="25"
                height="25"
                className="d-inline-block align-top"
                alt={localeDict.sendForm}
            />
        );
    }
};

export default SubmitButtonIcon;
