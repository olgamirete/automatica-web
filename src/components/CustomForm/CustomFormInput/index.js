import { Form } from "react-bootstrap";

function CustomFormInput(props) {
  return (
    <Form.Group>
      <Form.Control
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        aria-label={props.label}
        as={props.as}
        required={props.required}
        className={"bg-opacity-75 mt-2 " + props.className}
      />
    </Form.Group>
  );
}

export default CustomFormInput;
