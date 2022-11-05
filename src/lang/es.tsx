import { ReactComponent as IconFlag } from "assets/twemoji/flag_spain.svg";
import { Link } from "react-router-dom";
import { LanguageData } from "./typeLang";

const es: LanguageData = {
  _code: "es",
  _name: "Español",
  _flag: <IconFlag className="d-block" style={{ width: "1em" }} />,
  strings: {
    automatica: "Automatica",
    home: "Inicio",
    see_how: "¡Mira cómo!",
    about: "Acerca",
    how_to_know_if_we_can_help: "¿Cómo saber si me pueden ayudar?",
    showcase: "Servicios",

    ask_without_compromise: "¡Pregúntanos sin compromiso!",
    contact: "Contacto",
    contact_us: "Contáctanos",
    we_love_to_hear_from_you: "Hagamos algo increíble.",
    name: "Nombre",
    company: "Compañía",
    email: "Correo electrónico",
    message: "Mensaje",
    enter_your_name: "Ingresa tu nombre",
    enter_your_company: "Ingresa tu compañía",
    enter_your_email_address: "Ingresa tu correo electrónico",
    tell_us_why_you_write: "Cuéntanos por qué nos escribes",
    send: "Enviar",
    sending: "Enviando...",
    if_you_prefer_use_other_contact_channels:
      "Si lo prefieres, también puedes comunicarte con nosotros a través de nuestros demás canales:",
    team: "Equipo",
    our_team: "Nuestro equipo",
    project_leader: "Líder de proyectos",
    marketing: "Marketing",
    tech_leader: "Líder técnico",
    not_found: "No encontrado",
    message_sent_success:
      "¡Tu mensaje ha sido enviado! Te enviaremos una respuesta por correo para confirmarte que lo hemos recibido correctamente.",
    message_sent_error:
      "Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo más tarde, o utiliza alguno de nuestros canales alternativos.",
  },
  elements: {
    home_text: (
      <p className="text-light lead text-center">
        Hay una manera <span className="text-warning fw-bold">más simple</span>{" "}
        de hacer las cosas que te llevan tiempo, y en{" "}
        <span className="text-info fw-bold">Automatica</span> te vamos a ayudar
        a encontrarla.
      </p>
    ),
    about_text: (
      <p className="lead text-center">
        Nuestro <span className="text-warning fw-bold">objetivo</span> es ayudar
        a las empresas a{" "}
        <span className="text-info fw-bold">automatizar su trabajo</span>, para
        que no tengan que perder el tiempo haciendo tareas repetitivas o
        engorrosas.
      </p>
    ),
    showcase_1: (
      <>
        Consultoría en automatización y simplificación de{" "}
        <span className="fw-bold text-info">procesos</span>.
      </>
    ),
    showcase_2: (
      <>
        Diseño e implementación de indicadores (KPIs) y{" "}
        <span className="fw-bold text-pink">tableros de control</span> que se
        adaptan a tus necesidades.
      </>
    ),
    showcase_3: (
      <>
        <span className="text-info fw-bold">Capacitaciones</span> en PowerBI,
        Tableau, QlikView, QuickSight, Excel, Google Sheets y mucho más.
      </>
    ),
    showcase_4: (
      <>
        Diseño e implementación de soluciones de{" "}
        <span className="text-warning fw-bold">Machine Learning</span>, para
        sacar el mayor potencial de tus datos.
      </>
    ),
    showcase_5: (
      <>
        <span className="text-secondary fw-bold">Automatización</span> de tareas
        como: extracción de datos, generación de documentos, actualización de
        reportes, entre otras.
      </>
    ),
    it_looks_like_this_page_does_not_exist: (
      <>
        Parece que esta página no existe. ¡No te preocupes! Puedes ir al{" "}
        <Link to="/" className="fw-bold link-warning">
          inicio
        </Link>{" "}
        para ver si encuentras lo que buscabas, o escribirnos a través de la
        sección de{" "}
        <Link to="/contact" className="fw-bold link-info">
          contacto
        </Link>
        , para que podamos ayudarte.
      </>
    ),
  },
};

export default es;
