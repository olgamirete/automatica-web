import Dictionary from "@/i18n/types/Dictionary";

const dictionary: Dictionary<{
    sending: string;
    send: string;
    sendForm: string;
}> = {
    en: { sending: "Sending", send: "Send", sendForm: "Send form" },
    es: { sending: "Enviando", send: "Enviar", sendForm: "Enviar formulario" },
    de: {
        sending: "Wird gesendet",
        send: "Senden",
        sendForm: "Formular senden",
    },
};

export default dictionary;
