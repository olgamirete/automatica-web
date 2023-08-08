import Home from "@/components/pages/Home";
import parseLocale from "@/i18n/parseLocale";
import { headers } from "next/headers";

export default function Page() {
    const lang = parseLocale(headers().get("x-locale") ?? "");
    return <Home lang={lang} />;
}
