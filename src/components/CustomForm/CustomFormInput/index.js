import { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';

function CustomFormInput(props) {
    
    const controlRef = useRef(null);

    useEffect(() => {
        if (controlRef.current) {
            const elem = controlRef.current;
            for (let i = 0; i <= 10; i++) {
                if (elem.classList.contains("bg-opacity-" + i)) {
                    const currentColor = window.getComputedStyle(elem, null).getPropertyValue("background-color");
                    if (currentColor.includes("rgb(")) {
                        const newColor = currentColor.replace(")", ", " + (i === 10 ? "1" : ("0." + i)) + ")").replace("rgb(", "rgba(");
                        elem.style.setProperty("background-color", newColor, "important");
                    }
                }
            }
        }
    }, []);

    return (
        <Form.Group>
            <Form.Control
                ref={controlRef}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                aria-label={props.label}
                as={props.as}
                required={props.required}
                className={'bg-opacity-' + props.bgOpacity + ' ' + props.className}
                />
        </Form.Group>
    );
}

export default CustomFormInput;