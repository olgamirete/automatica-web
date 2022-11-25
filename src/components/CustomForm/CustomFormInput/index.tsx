export interface CustomFormInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  prepend?: string;
  append?: string;
  label: string;
  containerClassName?: string;
  labelClassName?: string;
}

const CustomFormInput: React.FC<CustomFormInputProps> = ({
  className,
  containerClassName,
  labelClassName,
  prepend,
  append,
  label,
  ...props
}) => {
  const id: string = `custom-form-input-${props.type}-${props.defaultChecked}_${props.defaultValue}_${label}_${props.name}_${props.value}_${props.checked}`;
  return (
    <div className={containerClassName}>
      <div className="input-group">
        {prepend && <span className="input-group-text">{prepend}</span>}
        <div className="form-floating">
          <input
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
    </div>
  );
};

export default CustomFormInput;
