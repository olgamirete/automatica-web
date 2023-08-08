import NotFound from "@/components/pages/NotFound";
import parseLocale from "@/i18n/parseLocale";
import { headers } from "next/headers";

export default function Page() {
    const lang = parseLocale(headers().get("x-locale") ?? "");
    return <NotFound lang={lang} />;
}
