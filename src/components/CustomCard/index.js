import { Card, Col, Container } from "react-bootstrap";
import "./index.css";

const CustomCard = (props) => {
  const CardIcon = props.Icon;
  return (
    <Col className="mb-3">
      <Card className="bg-transparent text-light border-0"> {/* border border-light */}
        <Container fluid className={"d-flex flex-nowrap py-2 px-3" + (props.reverse === true ? " flex-row-reverse" : " flex-row")}>
          <div className="d-flex justify-content-center align-items-center">
            {CardIcon !== undefined && (
              <CardIcon className={"showcase-item-icon m-0" +  (props.reverse === true ? " ml-3" : " mr-3")} />
            )}
          </div>
          <div className="p-0 m-0 w-100 d-flex align-items-center">
            <Card.Body className="p-0 m-0">
              <Card.Text className={"font-weight-light text-nowrap mb-1" + (props.reverse === true ? " text-right" : "")}>
                {props.children}
              </Card.Text>
            </Card.Body>
          </div>
        </Container>
      </Card>
    </Col>
  );
};

export default CustomCard;
