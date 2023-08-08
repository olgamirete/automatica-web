import Link from "next/link";
import InfoCard from "@/components/InfoCard";
import FCi18n from "@/i18n/types/FCi18n";
import dictionary from "./dictionary";

const Home: FCi18n<{}> = ({ lang }) => {
    const localeDict = dictionary[lang];
    return (
        <InfoCard className="bg-dark text-light border border-light">
            <h1 className="text-light mb-4 text-center">Automatica</h1>
            <div className="row m-0 p-0 justify-content-center">
                <div className="col m-0 p-0 col-12 col-md-10 col-lg-8">
                    {localeDict.welcome_message}
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <Link
                        className="btn btn-dark mt-3 border border-light"
                        href={`/${lang}/about`}
                    >
                        {localeDict.see_how}
                    </Link>
                </div>
            </div>
        </InfoCard>
    );
};

export default Home;
