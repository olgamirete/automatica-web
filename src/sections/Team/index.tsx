import ReactGA from 'react-ga4';
import { Row } from "react-bootstrap";
import InfoCard from "components/InfoCard";
import MemberCard from "./MemberCard";
import picFederico from "./pictures/federico.png";
import picJulieta from "./pictures/julieta.png";
import picFrancisco from "./pictures/francisco.png";
import React, { useContext, useEffect } from "react";
import LangContext from "contexts/LangContext";

const Team: React.FC = () => {
  const lang = useContext(LangContext);
  useEffect(()=>{
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: "/team", title: "Team" });
  }, []);
  return (
    <InfoCard className="bg-dark text-light border border-light">
      <h1 className="text-light mb-4 text-center">{lang.strings.our_team}</h1>
      <Row xs={1} sm={2} className="d-flex justify-content-center">
        <MemberCard
          picSrc={picFederico}
          name="Federico"
          subtitle={lang.strings.project_leader}
          urlLinkedIn="https://www.linkedin.com/in/fgiancarelli/"
          urlGitHub="https://github.com/omirete/"
          urlWebsite="https://federicogiancarelli.com/"
        />
        <MemberCard
          picSrc={picJulieta}
          name="Julieta"
          subtitle={lang.strings.marketing}
          urlLinkedIn="https://www.linkedin.com/in/julietamo/"
          urlWebsite="https://julietamorales.com/"
        />
        <MemberCard
          picSrc={picFrancisco}
          name="Francisco"
          subtitle={lang.strings.tech_leader}
          urlLinkedIn="https://www.linkedin.com/in/giancarellifrancisco/"
          urlGitHub="https://github.com/padapada09/"
        />
      </Row>
    </InfoCard>
  );
};

export default Team;
