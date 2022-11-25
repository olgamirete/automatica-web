import LangContext from "contexts/LangContext";
import { useContext } from "react";
import { FormStatus } from "types/forms";

const AlertMessage: React.FC<{ status: FormStatus }> = ({ status }) => {
  const lang = useContext(LangContext);
  switch (status) {
    case "sent":
      return (
        <div role="alert" className="mt-3 alert alert-light">
          {lang.strings.message_sent_success}
        </div>
      );
    case "error":
      return (
        <div role="alert" className="mt-3 alert alert-danger">
          {lang.strings.message_sent_error}
        </div>
      );
    default:
      return null;
  }
};

export default AlertMessage;
