import Home from "@/components/pages/Home";
import parseLocale from "@/i18n/parseLocale";

export default function Page({
    params: { lang },
}: {
    params: { lang: string };
}) {
    return <Home lang={parseLocale(lang)} />;
}
