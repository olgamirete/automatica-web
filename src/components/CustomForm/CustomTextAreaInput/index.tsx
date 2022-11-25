export interface CustomTextAreaInputProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  prepend?: string;
  append?: string;
  label: string;
  containerClassName?: string;
  labelClassName?: string;
}

const CustomTextAreaInput: React.FC<CustomTextAreaInputProps> = ({
  className,
  prepend,
  append,
  label,
  containerClassName,
  labelClassName,
  ...props
}) => {
  const id: string = `custom-form-input-text-area-${props.defaultChecked}_${props.defaultValue}_${label}_${props.name}_${props.value}`;
  return (
    <div className={`input-group ${containerClassName}`}>
      {prepend && <span className="input-group-text">{prepend}</span>}
      <div className="form-floating">
        <textarea
          id={id}
          className={`form-control ${className}`}
          aria-label={label}
          {...props}
        />
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      </div>
      {append && <span className="input-group-text">{append}</span>}
    </div>
  );
};

export default CustomTextAreaInput;
