import IconSend from './sendButton.svg';
import { Button, Spinner } from 'react-bootstrap';

function CustomSubmitButton(props) {

    const borderClass = props.borderColor ? "border border-" + props.borderColor : "";

    function IconForButton(props) {
        if (props.flagSending) {
            return (
                <Spinner animation="border" variant="light" size="sm">
                    <span className="sr-only">Enviando...</span>
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
    }

    return (
        <Button
            variant={props.variant}
            type="submit"
            className={"d-flex align-items-center justify-content-center mt-4 w-100 " + borderClass}
            disabled={props.flagSending}
        >
            <IconForButton flagSending={props.flagSending} />
            <span className="ml-1">{props.flagSending ? "Enviando..." : "Enviar"}</span>
        </Button>
    );
}

export default CustomSubmitButton;