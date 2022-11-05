import CustomCard from "components/CustomCard";
import InfoCard from "components/InfoCard";
import { ReactComponent as IconBrainChip } from "./icons/chip.svg";
import { ReactComponent as IconDashboard } from "./icons/dashboard.svg";
import { ReactComponent as IconCertificate } from "./icons/certificate.svg";
import { ReactComponent as IconRobot } from "./icons/ai_robot.svg";
import { ReactComponent as IconLightning } from "./icons/flash.svg";
import { CSSProperties, useContext } from "react";
import LangContext from "contexts/LangContext";
import { Link } from "react-router-dom";

const Showcase: React.FC = () => {
  const lang = useContext(LangContext);

  const iconStyles: CSSProperties = { width: "2.5em", fill: "#ffffff" };

  const ShowcaseContents = [
    { icon: <IconBrainChip style={iconStyles} />, text: lang.elements.showcase_1 },
    { icon: <IconDashboard style={iconStyles} />, text: lang.elements.showcase_2 },
    { icon: <IconCertificate style={iconStyles} />, text: lang.elements.showcase_3 },
    { icon: <IconRobot style={iconStyles} />, text: lang.elements.showcase_4 },
    { icon: <IconLightning style={iconStyles} />, text: lang.elements.showcase_5 },
  ];

  return (
    <InfoCard className="bg-dark text-light border border-light px-2 px-sm-5">
      <h1 className="mb-4 text-center">{lang.strings.showcase}</h1>
      {ShowcaseContents.map((content, i) => (
        <CustomCard key={i} icon={content.icon} reverse={i % 2 !== 0}>
          {content.text}
        </CustomCard>
      ))}
      <div className="row">
        <div className="col text-center">
          <Link className="btn btn-dark mt-3 border border-light" to="/contact">
            {lang.strings.ask_without_compromise}
          </Link>
        </div>
      </div>
    </InfoCard>
  );
};

export default Showcase;
