import LangContext from "contexts/LangContext";
import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import IconSend from "./sendButton.svg";

const Icon: React.FC<{ sending: boolean }> = ({ sending }) => {
  const lang = useContext(LangContext);

  if (sending) {
    return (
      <Spinner animation="border" variant="light" size="sm">
        <span className="visually-hidden">{lang.strings.sending}</span>
      </Spinner>
    );
  } else {
    return (
      <img
        src={IconSend}
        width="25"
        height="25"
        className="d-inline-block align-top"
        alt="Enviar formulario"
      />
    );
  }
};

export default Icon;
