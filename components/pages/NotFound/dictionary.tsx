import Dictionary from "@/i18n/types/Dictionary";
import Link from "next/link";
import { ReactNode } from "react";

const dictionary: Dictionary<{
    it_looks_like_this_page_does_not_exist: ReactNode;
}> = {
    en: {
        it_looks_like_this_page_does_not_exist: (
            <>
                It looks like this section doesn&apos;t exist. Don&apos;t worry! You can
                go to the{" "}
                <Link href="/" className="fw-bold link-warning">
                    Home
                </Link>{" "}
                screen to see if you can find there what you were looking for,
                or write to us through the{" "}
                <Link href="/contact" className="fw-bold link-info">
                    contact
                </Link>{" "}
                section, so we can help you.
            </>
        ),
    },
    es: {
        it_looks_like_this_page_does_not_exist: (
            <>
                Parece que esta página no existe. ¡No te preocupes! Puedes ir al{" "}
                <Link href="/" className="fw-bold link-warning">
                    inicio
                </Link>{" "}
                para ver si encuentras lo que buscabas, o escribirnos a través
                de la sección de{" "}
                <Link href="/contact" className="fw-bold link-info">
                    contacto
                </Link>
                , para que podamos ayudarte.
            </>
        ),
    },
    de: {
        it_looks_like_this_page_does_not_exist: (
            <>
                Diese Seite scheint nicht zu exisieren. Machen Sie keine Sorge!
                Sie können wieder zum{" "}
                <Link href="/" className="fw-bold link-warning">
                    Anfang
                </Link>{" "}
                gehen, um zu schauen ob Sie dort das finden, was Sie gesucht
                hatten. Sie können auch uns direkt eine Nachricht schicken durch
                den Formular auf der{" "}
                <Link href="/contact" className="fw-bold link-info">
                    Kontakt
                </Link>{" "}
                Seite, damit wir Ihnen helfen können.
            </>
        ),
    },
};

export default dictionary;
