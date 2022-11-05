import { Card, Row, Col } from "react-bootstrap";
import "./index.css";
import { ReactComponent as IconLinkedIn } from "assets/icons/linkedin.svg";
import { ReactComponent as IconGitHub } from "assets/icons/github.svg";
import { ReactComponent as IconWebsite } from "assets/icons/website.svg";

export interface MemberCardProps {
  picSrc: string;
  name: string;
  subtitle: string;
  urlLinkedIn?: string;
  urlGitHub?: string;
  urlWebsite?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  picSrc,
  name,
  subtitle,
  urlLinkedIn,
  urlGitHub,
  urlWebsite,
}) => {
  return (
    <Col className="mb-4">
      <Card className="bg-transparent border-0 text-light">
        <Row className="flex-nowrap">
          <Col
            className="d-flex align-items-center justify-content-center"
            xs={6}
          >
            <Card.Img
              variant="top"
              src={picSrc}
              className="rounded rounded-circle max-height-profile-pic"
            />
          </Col>
          <Col className="ps-0">
            <Card.Body className="ps-0">
              <Card.Title className="mb-0">{name}</Card.Title>
              <Card.Text className="fw-light text-nowrap mb-1">
                {subtitle}
              </Card.Text>
              <Card.Text>
                {urlLinkedIn && (
                  <a
                    href={urlLinkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-social-team"
                  >
                    <IconLinkedIn />
                  </a>
                )}
                {urlGitHub && (
                  <a
                    href={urlGitHub}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-social-team"
                  >
                    <IconGitHub />
                  </a>
                )}
                {urlWebsite && (
                  <a
                    href={urlWebsite}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-social-team"
                  >
                    <IconWebsite />
                  </a>
                )}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default MemberCard;
