import InfoCard from "@/components/InfoCard";
import dictionary from "./dictionary";
import FCi18n from "@/i18n/types/FCi18n";

const NotFound: FCi18n<{}> = ({ lang }) => {
    const localeDict = dictionary[lang];
    return (
        <InfoCard className="bg-dark text-light border border-light">
            <h1 className="text-light mb-4 text-center">404</h1>
            <div className="row m-0 p-0 justify-content-center">
                <div className="col m-0 p-0 col-12 col-md-10 col-lg-8">
                    <p className="text-light lead text-center">
                        {localeDict.it_looks_like_this_page_does_not_exist}
                    </p>
                </div>
            </div>
        </InfoCard>
    );
};

export default NotFound;
