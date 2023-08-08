import CustomCard from "@/components/CustomCard";
import InfoCard from "@/components/InfoCard";
import IconBrainChip from "./icons/chip.svg";
import IconDashboard from "./icons/dashboard.svg";
import IconCertificate from "./icons/certificate.svg";
import IconRobot from "./icons/ai_robot.svg";
import IconLightning from "./icons/flash.svg";
import { CSSProperties } from "react";
import Link from "next/link";
import FCi18n from "@/i18n/types/FCi18n";
import dictionary from "./dictionary";

const Showcase: FCi18n<{}> = ({ lang }) => {
    const localeDict = dictionary[lang];

    const iconStyles: CSSProperties = { width: "2.5em", fill: "#ffffff" };

    const ShowcaseContents = [
        {
            icon: <IconBrainChip style={iconStyles} />,
            text: localeDict.showcase_1,
        },
        {
            icon: <IconDashboard style={iconStyles} />,
            text: localeDict.showcase_2,
        },
        {
            icon: <IconCertificate style={iconStyles} />,
            text: localeDict.showcase_3,
        },
        { icon: <IconRobot style={iconStyles} />, text: localeDict.showcase_4 },
        {
            icon: <IconLightning style={iconStyles} />,
            text: localeDict.showcase_5,
        },
    ];

    return (
        <InfoCard className="bg-dark text-light border border-light">
            <h1 className="mb-4 text-center">{localeDict.showcase}</h1>
            {ShowcaseContents.map((content, i) => (
                <CustomCard key={i} icon={content.icon} reverse={i % 2 !== 0}>
                    {content.text}
                </CustomCard>
            ))}
            <div className="row">
                <div className="col text-center">
                    <Link
                        className="btn btn-dark mt-3 border border-light"
                        href={`/${lang}/contact`}
                    >
                        {localeDict.ask_without_compromise}
                    </Link>
                </div>
            </div>
        </InfoCard>
    );
};

export default Showcase;
