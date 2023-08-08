import Dictionary from "@/i18n/types/Dictionary";

const dictionary: Dictionary<{
    message_sent_success: string;
    message_sent_error: string;
    meet_the_team: string;
}> = {
    en: {
        message_sent_success:
            "¡Your message has been sent! We will send you a copy per email so you are sure we have received it correctly.",
        message_sent_error:
            "There was an error while sending your message. Please try again later, or use one of our alternative channels.",
        meet_the_team: "Meet the team!"
    },
    es: {
        message_sent_success:
            "¡Tu mensaje ha sido enviado! Te enviaremos una copia por correo para confirmarte que lo hemos recibido correctamente.",
        message_sent_error:
            "Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo más tarde, o utiliza alguno de nuestros canales alternativos.",
        meet_the_team: "¡Conoce a nuestro equipo!"
    },
    de: {
        message_sent_success:
            "Ihre Nachricht wurde geschickt! Wir schicken Ihnen eine Bestätigungsemail, damit Sie wissen wir haben es erfolgreich bekommen.",
        message_sent_error:
            "Es ist ein Fehler beim Senden aufgetaucht. Bitte versuchen Sie es später erneut, oder verwenden sie eine unseren anderen Kanälen.",
            meet_the_team: "Triff das Team!"
    },
};

export default dictionary;
