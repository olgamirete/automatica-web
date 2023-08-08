import NotFound from "@/components/pages/NotFound";
import { defaultLocale } from "@/i18n/config";
import { headers } from "next/headers";

export default function Page() {
    const lang = headers().get("x-locale") ?? defaultLocale;
    return <NotFound lang={lang} />;
}
