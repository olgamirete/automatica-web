import FCi18n from "@/i18n/types/FCi18n";
import { SupportedLocale } from "@/i18n/types/Locale";
import LocaleMetadata from "@/i18n/LocaleMetadata";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import Link from "next/link";
import changeLocaleInPathname from "@/i18n/changeLocaleInPathname";
import { usePathname } from "next/navigation";

export interface LanguageSelectorProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const LanguageSelector: FCi18n<LanguageSelectorProps> = ({
    className,
    lang,
    ...props
}) => {
    const pathname = usePathname();
    return (
        <div className={`btn-group ${className}`} role="group" {...props}>
            {SupportedLocale.map((supportedLocale, i) => {
                const langMetadata = LocaleMetadata[supportedLocale];
                const active = supportedLocale === lang;
                return (
                    <Link
                        key={i}
                        href={changeLocaleInPathname(pathname, supportedLocale)}
                        className={`
                            ms-1
                            btn btn-sm btn-secondary
                            border-0 rounded shadow-none
                            ${
                                active
                                    ? "bg-secondary"
                                    : "bg-transparent text-dark bg-dark-hover bg-opacity-25-hover"
                            }
                        `}
                    >
                        <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center">
                            <div className="fs-5">{langMetadata._flag}</div>
                            <div className="ms-1 d-none d-sm-block">
                                {langMetadata._name}
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default LanguageSelector;
