export interface CustomTextAreaInputProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  prepend?: string;
  append?: string;
  label?: string;
}

const CustomTextAreaInput: React.FC<CustomTextAreaInputProps> = ({
  className,
  prepend,
  append,
  label,
  ...props
}) => {
  return (
    <div className="input-group">
      {prepend && <span className="input-group-text">{prepend}</span>}
      <textarea
        className={`form-control bg-opacity-75 mt-2 ${className}`}
        placeholder="Username"
        aria-label={label}
        {...props}
      />
      {append && <span className="input-group-text">{append}</span>}
    </div>
  );
};

export default CustomTextAreaInput;
