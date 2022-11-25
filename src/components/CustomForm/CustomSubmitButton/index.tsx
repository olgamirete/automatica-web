import { useContext } from "react";
import LangContext from "contexts/LangContext";
import Icon from "./Icon";

export interface CustomSubmitButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  borderColor: string;
  sending: boolean;
  variant?: string;
}

const CustomSubmitButton: React.FC<CustomSubmitButtonProps> = ({
  borderColor,
  sending,
  className,
  variant,
  ...props
}) => {
  const borderClass = borderColor ? "border border-" + borderColor : "";
  const lang = useContext(LangContext);

  return (
    <button
      type="submit"
      className={`
        d-flex align-items-center justify-content-center
        btn btn-${variant ?? "primary"}
        ${borderClass}
        ${className}
      `}
      disabled={sending}
      {...props}
    >
      <Icon sending={sending} />
      <span className="ms-1">
        {sending ? lang.strings.sending : lang.strings.send}
      </span>
    </button>
  );
};

export default CustomSubmitButton;
