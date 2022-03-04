import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomCard from "components/CustomCard";
import InfoCard from "components/InfoCard";
import { ReactComponent as IconBrainChip } from "./icons/chip.svg";
import { ReactComponent as IconDashboard } from "./icons/dashboard.svg";
import { ReactComponent as IconCertificate } from "./icons/certificate.svg";
import { ReactComponent as IconRobot } from "./icons/ai_robot.svg";
import { ReactComponent as IconLightning } from "./icons/flash.svg";
import { useContext } from "react";
import LangContext from "contexts/LangContext";

function Showcase(props) {
  const lang = useContext(LangContext);

  const ShowcaseContents = [
    { icon: IconBrainChip, text: lang.showcase_1 },
    { icon: IconDashboard, text: lang.showcase_2 },
    { icon: IconCertificate, text: lang.showcase_3 },
    { icon: IconRobot, text: lang.showcase_4 },
    { icon: IconLightning, text: lang.showcase_5 },
  ];

  return (
    <InfoCard className="bg-dark text-light border border-light">
      <h1 className="mb-4 text-center">{lang.showcase}</h1>
      <Row xs={1} sm={1} className="d-flex justify-content-center">
        {ShowcaseContents.map((content, i) => (
          <CustomCard Icon={content.icon} reverse={i % 2 !== 0}>
            {content.text}
          </CustomCard>
        ))}
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            variant="dark"
            className="mt-3 border border-light"
            href="/contact"
            to="/contact"
            as={Link}
          >
            {lang.ask_without_compromise}
          </Button>
        </Col>
      </Row>
    </InfoCard>
  );
}

export default Showcase;
