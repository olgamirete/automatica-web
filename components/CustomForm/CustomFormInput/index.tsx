import { useId } from "react";

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
    const id = useId();
    return (
        <div className={containerClassName}>
            <label htmlFor={id} className={labelClassName}>
                {label}
            </label>
            <div className="input-group">
                {prepend && <span className="input-group-text">{prepend}</span>}
                <input
                    id={id}
                    className={`form-control ${className}`}
                    aria-label={label}
                    {...props}
                />
                {append && <span className="input-group-text">{append}</span>}
            </div>
        </div>
    );
};

export default CustomFormInput;
