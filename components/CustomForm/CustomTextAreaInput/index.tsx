import { useId } from "react";

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
    const id = useId();
    return (
        <div className={containerClassName}>
            <label htmlFor={id} className={labelClassName}>
                {label}
            </label>
            <div className="input-group">
                {prepend && <span className="input-group-text">{prepend}</span>}
                <textarea
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

export default CustomTextAreaInput;
