import Showcase from "@/components/pages/Showcase";
import parseLocale from "@/i18n/parseLocale";

export default function Page({
    params: { lang },
}: {
    params: { lang: string };
}) {
    return <Showcase lang={parseLocale(lang)} />;
}
