import "./bootstrap.scss";
import "./index.css";
import type { Metadata, ResolvingMetadata } from "next";
import AppContainer from "@/components/AppContainer";
import { ReactNode } from "react";
import { headers } from "next/headers";
import { DictionaryObject } from "@/i18n/types/Dictionary";
import parseLocale from "@/i18n/parseLocale";

export const metadataDictionary: DictionaryObject<Metadata> = {
    en: {
        description:
            "There is a simpler way of doing the things that bother you, and at Automatica we'll help you find it.",
    },
    es: {
        description:
            "Hay una manera más simple de hacer las cosas que te molestan, y en Automatica te vamos a ayudar a encontrarla.",
    },
    de: {
        description:
            "Es gibt eine einfachere Art die Sachen zu machen, die Ihnen viel Zeit nehmen, und bei Automatica werden wir Ihnen helfen, diese zu finden.",
    },
};

export async function generateMetadata(
    props: any,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const lang = parseLocale(headers().get("x-locale") ?? "");

    return {
        title: "Automatica",
        icons: {
            apple: "images/logo192.png",
            other: {
                url: "/favicon.png",
                rel: "icon",
                type: "image/png",
            },
        },
        ...metadataDictionary[lang],
    };
}

export default function RootLayout({ children }: { children: ReactNode }) {
    const lang = parseLocale(headers().get("x-locale") ?? "");
    return (
        <html lang={lang}>
            <body>
                <AppContainer lang={lang}>{children}</AppContainer>
            </body>
        </html>
    );
}
