import Team from "@/components/pages/Team";
import parseLocale from "@/i18n/parseLocale";

export default function Page({
    params: { lang },
}: {
    params: { lang: string };
}) {
    return <Team lang={parseLocale(lang)} />;
}
