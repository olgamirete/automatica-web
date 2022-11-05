import { Container, Row, Col } from "react-bootstrap";

export interface InfoCardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const InfoCard: React.FC<InfoCardProps> = ({ className, ...props }) => {
  return (
    <Container fluid className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={6}>
          <div
            className={`info-card rounded py-5 px-3 bg-opacity-50 ${className}`}
            {...props}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoCard;
