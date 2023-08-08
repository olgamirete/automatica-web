import Dictionary from "@/i18n/types/Dictionary";

const dictionary: Dictionary<{
    contact_us: string;
    we_love_to_hear_from_you: string;
    if_you_prefer_use_other_contact_channels: string;
}> = {
    en: {
        contact_us: "Contact us",
        we_love_to_hear_from_you: "Let's do something great.",
        if_you_prefer_use_other_contact_channels:
            "If you prefer, you may also get in touch through any of our other channels:",
    },
    es: {
        contact_us: "Contáctanos",
        we_love_to_hear_from_you: "Hagamos algo increíble.",
        if_you_prefer_use_other_contact_channels:
            "Si lo prefieres, también puedes comunicarte con nosotros a través de nuestros demás canales:",
    },
    de: {
        contact_us: "Kontaktieren Sie uns",
        we_love_to_hear_from_you: "Lass uns was tolles machen!",
        if_you_prefer_use_other_contact_channels:
            "Wenn sie es lieber so haben, können sie auch uns über unsere andere Kanäle kontaktieren:",
    },
};

export default dictionary;
