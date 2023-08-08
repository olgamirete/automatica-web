import Dictionary from "@/i18n/types/Dictionary";
import { ReactNode } from "react";

const dictionary: Dictionary<{
    about: string;
    about_text: ReactNode;
    how_to_know_if_we_can_help: string;
}> = {
    en: {
        about: "About",
        about_text: (
            <p className="lead text-center">
                Our <span className="text-warning fw-bold">goal</span> is to
                help companies{" "}
                <span className="text-info fw-bold">automate their work</span>,
                so that they don&apos;t have to lose time doing things that don&apos;t add
                value.
            </p>
        ),
        how_to_know_if_we_can_help: "Check out our services!",
    },
    es: {
        about: "Acerca",
        about_text: (
            <p className="lead text-center">
                Nuestro <span className="text-warning fw-bold">objetivo</span>{" "}
                es ayudar a las empresas a{" "}
                <span className="text-info fw-bold">
                    automatizar su trabajo
                </span>
                , para que no tengan que perder el tiempo haciendo tareas
                repetitivas o engorrosas.
            </p>
        ),
        how_to_know_if_we_can_help: "¡Mira nuestros servicios!",
    },
    de: {
        about: "Über uns",
        about_text: (
            <p className="lead text-center">
                Unser <span className="text-warning fw-bold">Ziel</span> ist es,
                Unternehmen dabei helfen,{" "}
                <span className="text-info fw-bold">
                    ihre Arbeit zu automatisieren
                </span>
                , damit sie keine Zeit bei unproduktive Tätigkeiten verlieren
                müssen.
            </p>
        ),
        how_to_know_if_we_can_help: "Schauen sie sich unser Portfolio an!",
    },
};

export default dictionary;
