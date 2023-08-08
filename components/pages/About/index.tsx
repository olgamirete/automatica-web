import InfoCard from "@/components/InfoCard";
import Link from "next/link";
import FCi18n from "@/i18n/types/FCi18n";
import dictionary from "./dictionary";

const About: FCi18n<{}> = ({ lang }) => {
    const localeDict = dictionary[lang];
    return (
        <InfoCard className="bg-dark text-light border border-light">
            <h1 className="mb-4 text-center">{localeDict.about}</h1>
            {localeDict.about_text}
            <div className="row">
                <div className="col text-center">
                    <Link
                        className="btn btn-dark mt-3 border border-light"
                        href={`/${lang}/showcase`}
                    >
                        {localeDict.how_to_know_if_we_can_help}
                    </Link>
                </div>
            </div>
            {/* <h1 className="mb-4 mt-4 text-center">Nuestra <span className="">misión</span>:</h1>
            <p className="lead text-center">
                Mejorar la calidad de vida de las personas.
            </p> */}
            {/* <p className="lead text-center">
                Nuestra <span className="fw-bold text-danger">misión</span>, mejorar la calidad de vida de las personas.
            </p> */}
            {/* <p className="lead text-center">
                Creemos <span className="fw-bold text-warning">Nadie</span> debería tener que hacer <span className="text-danger fw-bold">tareas repetitivas</span> y <span className="text-danger fw-bold">manuales</span> en su trabajo, y por eso creamos Automatica.
            </p> */}
        </InfoCard>
    );
};

export default About;
