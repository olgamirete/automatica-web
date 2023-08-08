import FCi18n from "@/i18n/types/FCi18n";
import FormStatus from "@/types/FormStatus";
import dictionary from "./dictionary";
import Link from "next/link";

const AlertMessage: FCi18n<{ status: FormStatus }> = ({ status, lang }) => {
    const localeDict = dictionary[lang];
    switch (status) {
        case "sent":
            return (
                <>
                    <div role="alert" className="mt-3 alert alert-light">
                        {localeDict.message_sent_success}
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <Link
                                className="btn btn-dark mt-3 border border-light"
                                href={`/${lang}/contact`}
                            >
                                {localeDict.meet_the_team}
                            </Link>
                        </div>
                    </div>
                </>
            );
        case "error":
            return (
                <div role="alert" className="mt-3 alert alert-danger">
                    {localeDict.message_sent_error}
                </div>
            );
        default:
            return null;
    }
};

export default AlertMessage;
