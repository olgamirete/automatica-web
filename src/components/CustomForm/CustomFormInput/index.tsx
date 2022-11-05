export interface CustomFormInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  prepend?: string;
  append?: string;
  label?: string;
}

const CustomFormInput: React.FC<CustomFormInputProps> = ({
  className,
  prepend,
  append,
  label,
  ...props
}) => {
  return (
    <div className="input-group">
      {prepend && <span className="input-group-text">{prepend}</span>}
      <input
        className={`form-control bg-opacity-75 mt-2 ${className}`}
        placeholder="Username"
        aria-label={label}
        {...props}
      />
      {append && <span className="input-group-text">{append}</span>}
    </div>
  );
};

export default CustomFormInput;
