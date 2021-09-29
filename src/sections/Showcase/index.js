import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomCard from "../../components/CustomCard";
import InfoCard from "../../components/InfoCard";
import { ReactComponent as IconBrainChip } from "./icons/chip.svg";
import { ReactComponent as IconDashboard } from "./icons/dashboard.svg";
import { ReactComponent as IconCertificate } from "./icons/certificate.svg";
import { ReactComponent as IconRobot } from "./icons/ai_robot.svg";
import { ReactComponent as IconLightning } from "./icons/flash.svg";

function Showcase(props) {
  return (
    <InfoCard
      variant="dark"
      bgOpacity={7}
      className="text-light border border-light"
    >
      <h1 className="mb-4 text-center">Servicios</h1>
      {/* <p className="text-light lead text-center">
        Así te puede ayudar nuestro{" "}
        <span className="font-weight-bold text-info">equipo</span>:
      </p> */}
      <Row xs={1} sm={1} className="d-flex justify-content-center">
        <CustomCard Icon={IconBrainChip} title="prueba2" reverse={false}>
          <span className="text-wrap">
            Consultoría en automatización y simplificación de{" "}
            <span className="font-weight-bold text-info">procesos</span>.
          </span>
        </CustomCard>
        <CustomCard Icon={IconDashboard} title="prueba2" reverse={true}>
          <span className="text-wrap">
            Diseño e implementación de indicadores (KPIs) y{" "}
            <span className="font-weight-bold text-pink">
              tableros de control
            </span>{" "}
            que se adaptan a tus necesidades.
          </span>
        </CustomCard>
        <CustomCard Icon={IconCertificate} title="prueba2" reverse={false}>
          <span className="text-wrap">
            <span className="text-info font-weight-bold">Capacitaciones</span>{" "}
            en PowerBI, Tableau, QlikView, QuickSight, Excel, Google Sheets y
            mucho más.
          </span>
        </CustomCard>
        <CustomCard Icon={IconRobot} title="prueba2" reverse={true}>
          <span className="text-wrap">
            Diseño e implementación de soluciones de{" "}
            <span className="text-warning font-weight-bold">
              Machine Learning
            </span>
            , para sacar el mayor potencial de tus datos.
          </span>
        </CustomCard>
        <CustomCard Icon={IconLightning} title="prueba2" reverse={false}>
          <span className="text-wrap">
          <span className="text-secondary font-weight-bold">Automatización</span> de tareas como: extracción de datos, generación de
            documentos, actualización de reportes, entre otras.
          </span>
        </CustomCard>
      </Row>
      {/* <ListGroup variant="flush" className="text-center">
        <ListGroup.Item className="bg-transparent border-secondary">
          Actualización periódica de{" "}
          <span className="font-weight-bold text-warning">reportes</span>{" "}
          (diaria, semanal, mensual).
        </ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-secondary">
          Armado de{" "}
          <span className="font-weight-bold text-warning">tableros</span> en
          herramientas de{" "}
          <span className="font-weight-bold text-warning">
            Business Intelligence (BI)
          </span>
          .
        </ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-secondary">
          <span className="font-weight-bold text-warning">Extracción</span>{" "}
          regular de{" "}
          <span className="font-weight-bold text-warning">datos</span> de
          fuentes diversas.
        </ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-secondary">
          <span className="font-weight-bold text-warning">Generación</span>{" "}
          automática de{" "}
          <span className="font-weight-bold text-warning">documentos</span>{" "}
          basados en{" "}
          <span className="font-weight-bold text-warning">plantillas</span>.
        </ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-secondary">
          Mejora de{" "}
          <span className="font-weight-bold text-warning">procesos</span> para
          facilitar la{" "}
          <span className="font-weight-bold text-warning">recolección</span> de{" "}
          <span className="font-weight-bold text-warning">datos</span>.
        </ListGroup.Item>
      </ListGroup> */}
      {/* <p className="lead text-center mt-4">
                Estas tareas manuales llevan <span className="font-weight-bold text-pink">tiempo</span>, dan lugar a <span className="font-weight-bold text-pink">errores</span>, <span className="font-weight-bold text-pink">molestan</span> y <span className="font-weight-bold text-pink">desmotivan</span>.
            </p> */}
      {/* <p className="lead text-center">
                Por eso, si alguna de estas situaciones los describe, en <span className="text-info font-weight-bold">Automatica</span> podremos hacer mucho por vosotros.
            </p> */}
      <Row>
        <Col className="text-center">
          <Button
            variant="dark"
            className="mt-3 border border-light"
            href="/contact"
            to="/contact"
            as={Link}
          >
            ¡Pregúntanos sin compromiso!
          </Button>
        </Col>
      </Row>
    </InfoCard>
  );
}

export default Showcase;
