import IconSend from './sendButton.svg';
import { Button } from 'react-bootstrap';

function CustomSubmitButton(props) {
    
    const borderClass = props.borderColor ? "border border-" + props.borderColor : "";
    
    return (
        <Button
            variant={props.variant}
            type="submit"
            className={"mt-3 w-100 " + borderClass}
            >
            <img
                src={IconSend}
                width="25"
                height="25"
                className="d-inline-block align-top"
                alt="Enviar formulario"
            />
            <span> Enviar</span>
        </Button>
    );
}

export default CustomSubmitButton;