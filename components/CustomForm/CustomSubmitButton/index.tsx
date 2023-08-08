import SubmitButtonIcon from "./SubmitButtonIcon";
import dictionary from "./dictionary";
import FCi18n from "@/i18n/types/FCi18n";

export interface CustomSubmitButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    borderColor: string;
    sending: boolean;
    variant?: string;
}

const CustomSubmitButton: FCi18n<CustomSubmitButtonProps> = ({
    borderColor,
    sending,
    className,
    variant,
    lang,
    ...props
}) => {
    const borderClass = borderColor ? "border border-" + borderColor : "";
    const localeDict = dictionary[lang];

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
            <SubmitButtonIcon lang={lang} sending={sending} />
            <span className="ms-1">
                {sending ? localeDict.sending : localeDict.send}
            </span>
        </button>
    );
};

export default CustomSubmitButton;
