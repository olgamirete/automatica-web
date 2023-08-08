import About from "@/components/pages/About";
import parseLocale from "@/i18n/parseLocale";

export default function Page({
    params: { lang },
}: {
    params: { lang: string };
}) {
    return <About lang={parseLocale(lang)} />;
}
