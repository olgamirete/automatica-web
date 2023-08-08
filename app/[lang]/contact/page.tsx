import Contact from "@/components/pages/Contact";
import parseLocale from "@/i18n/parseLocale";

export default function Page({
    params: { lang },
}: {
    params: { lang: string };
}) {
    return <Contact lang={parseLocale(lang)} />;
}
