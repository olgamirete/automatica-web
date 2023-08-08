import Dictionary from "@/i18n/types/Dictionary";

const dictionary: Dictionary<{
    enter_your_name: string;
    name: string;
    enter_your_first_name: string;
    first_name: string;
    enter_your_last_name: string;
    last_name: string;
    enter_your_company: string;
    company: string;
    enter_your_email_address: string;
    email: string;
    tell_us_why_you_write: string;
    message: string;
    please_complete_captcha: string;
}> = {
    en: {
        name: "Name",
        enter_your_name: "Enter your name",
        first_name: "First name",
        last_name: "Last name",
        company: "Company",
        email: "E-Mail",
        message: "Message",
        enter_your_first_name: "Enter your first name",
        enter_your_last_name: "Enter your last name",
        enter_your_company: "Enter your company",
        enter_your_email_address: "Enter your e-mail",
        tell_us_why_you_write: "Tell us why you are writing",
        please_complete_captcha: "Please complete the captcha.",
    },
    es: {
        name: "Nombre",
        enter_your_name: "Ingresa tu nombre",
        first_name: "Nombre",
        last_name: "Apellido",
        company: "Compañía",
        email: "Correo electrónico",
        message: "Mensaje",
        enter_your_first_name: "Ingresa tu nombre",
        enter_your_last_name: "Ingresa tu apellido",
        enter_your_company: "Ingresa tu compañía",
        enter_your_email_address: "Ingresa tu correo electrónico",
        tell_us_why_you_write: "Cuéntanos por qué nos escribes",
        please_complete_captcha: "Por favor, validar el captcha.",
    },
    de: {
        name: "Name",
        enter_your_name: "Name eingeben",
        first_name: "Vorname",
        last_name: "Nachname",
        company: "Unternehmen",
        email: "E-Mail",
        message: "Nachricht",
        enter_your_first_name: "Vorname eingeben",
        enter_your_last_name: "Nachname eingeben",
        enter_your_company: "Firma eingeben",
        enter_your_email_address: "E-Mail eingeben",
        tell_us_why_you_write: "Teilen sie uns mit, warum sie uns schreiben",
        please_complete_captcha: "Bitte Captcha validieren.",
    },
};

export default dictionary;
