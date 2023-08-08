import InfoCard from "@/components/InfoCard";
import MemberCard from "./MemberCard";
import picFederico from "./pictures/federico.png";
import picJulieta from "./pictures/julieta.png";
import picFrancisco from "./pictures/francisco.png";
import FCi18n from "@/i18n/types/FCi18n";
import dictionary from "./dictionary";

const Team: FCi18n<{}> = ({ lang }) => {
    const localeDict = dictionary[lang];
    return (
        <InfoCard className="bg-dark text-light border border-light">
            <h1 className="text-light mb-4 text-center">
                {localeDict.our_team}
            </h1>
            <div className="d-flex justify-content-center row row-cols-sm-2 row-cols-1">
                <MemberCard
                    picSrc={picFederico.src}
                    name="Federico"
                    subtitle={localeDict.project_leader}
                    urlLinkedIn="https://www.linkedin.com/in/fgiancarelli/"
                    urlGitHub="https://github.com/omirete/"
                    urlWebsite="https://federicogiancarelli.com/"
                />
                <MemberCard
                    picSrc={picJulieta.src}
                    name="Julieta"
                    subtitle={localeDict.marketing}
                    urlLinkedIn="https://www.linkedin.com/in/julietamo/"
                    urlWebsite="https://julietamorales.com/"
                />
                <MemberCard
                    picSrc={picFrancisco.src}
                    name="Francisco"
                    subtitle={localeDict.tech_leader}
                    urlLinkedIn="https://www.linkedin.com/in/giancarellifrancisco/"
                    urlGitHub="https://github.com/padapada09/"
                />
            </div>
        </InfoCard>
    );
};

export default Team;
