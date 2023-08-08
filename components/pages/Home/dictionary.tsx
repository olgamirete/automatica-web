import Dictionary from "@/i18n/types/Dictionary";
import { ReactNode } from "react";

const dictionary: Dictionary<{
    welcome_message: ReactNode;
    see_how: string;
}> = {
    en: {
        welcome_message: (
            <p className="text-light lead text-center">
                There is a <span className="text-warning fw-bold">simpler</span>{" "}
                way of doing the things that take you time, and at{" "}
                <span className="text-info fw-bold">Automatica</span> we will
                help you find it.
            </p>
        ),
        see_how: "See how!",
    },
    es: {
        welcome_message: (
            <p className="text-light lead text-center">
                Hay una manera{" "}
                <span className="text-warning fw-bold">más simple</span> de
                hacer las cosas que te llevan tiempo, y en{" "}
                <span className="text-info fw-bold">Automatica</span> te vamos a
                ayudar a encontrarla.
            </p>
        ),
        see_how: "¡Mira cómo!",
    },
    de: {
        welcome_message: (
            <p className="text-light lead text-center">
                Es gibt eine{" "}
                <span className="text-warning fw-bold">einfachere</span> Art die
                Sachen zu machen, die Ihnen viel Zeit nehmen, und bei{" "}
                <span className="text-info fw-bold">Automatica</span> werden wir
                Ihnen helfen, diese zu finden.
            </p>
        ),
        see_how: "Sehen Sie es!",
    },
};

export default dictionary