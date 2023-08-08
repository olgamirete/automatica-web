import IconEmail from "./Icons/email.svg";
import IconTelephone from "./Icons/telephone.svg";
import IconWhatsApp from "./Icons/whatsapp.svg";

const SocialFooter: React.FC = () => {
  return (
    <div className="d-flex flex-row flex-nowrap justify-content-center">
      <a href="tel:+34 634 86 94 88" className="d-block">
        <IconTelephone className="fill-light" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=+34634869488"
        className="d-block"
      >
        <IconWhatsApp className="fill-light mx-3" />
      </a>
      <a href="mailto:contacto@automaticaconsultora.com" className="d-block">
        <IconEmail className="fill-light" />
      </a>
    </div>
  );
};

export default SocialFooter;
