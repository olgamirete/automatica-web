import LangContext from "contexts/LangContext";
import { useCallback, useContext, useRef, useState } from "react";
import { FormStatus } from "types/forms";

export interface UseContactFormReturn {
  formRef: React.RefObject<HTMLFormElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  messageStatus: FormStatus;
  loadingCaptcha: boolean;
  setLoadingCaptcha: React.Dispatch<React.SetStateAction<boolean>>;
}

const useContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const lang = useContext(LangContext);
  const [messageStatus, setMessageStatus] = useState<FormStatus>("null");
  const [loadingCaptcha, setLoadingCaptcha] = useState(true);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      // Prevent form submit
      e.preventDefault();

      setMessageStatus("sending");

      // Get form data
      const form = e.currentTarget;
      const formData = new FormData(form);

      if (formData.get("g-recaptcha-response")) {
        formData.set(
          "date",
          new Date().toLocaleDateString(lang._locale, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        );
        formData.set("locale", lang._locale?.toString() ?? "en-UK");

        const data = new URLSearchParams();
        formData.forEach((value, key) => {
          data.append(key, value.toString());
        });

        // Send data using the fetch api
        fetch("https://automatica.com.ar/send_contact_email.php", {
          method: "post",
          body: data,
        })
          .then(function (response) {
            return response.text();
          })
          .then(function (text: string) {
            // console.log(text);
            form.reset();
            setMessageStatus("sent");
          })
          .catch(function (error) {
            console.log(error);
            setMessageStatus("error");
          });
      } else {
        alert(lang.strings.please_complete_captcha);
        setMessageStatus("null");
      }

      // Prevent html form submit
      return false;
    },
    [lang, setMessageStatus]
  );

  return {
    formRef,
    handleSubmit,
    messageStatus,
    loadingCaptcha,
    setLoadingCaptcha,
  };
};

export default useContactForm;
