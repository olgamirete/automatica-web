"use client";
import { useCallback, useRef, useState } from "react";
import FormStatus from "@/types/FormStatus";
import { Locale } from "@/i18n/types/Locale";
import LocaleMetadata from "@/i18n/LocaleMetadata";
import dictionary from "./dictionary";

export interface UseContactFormReturn {
    formRef: React.RefObject<HTMLFormElement>;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
    messageStatus: FormStatus;
    loadingCaptcha: boolean;
    setLoadingCaptcha: React.Dispatch<React.SetStateAction<boolean>>;
}

const useContactForm = (lang: Locale) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [messageStatus, setMessageStatus] = useState<FormStatus>("null");
    const [loadingCaptcha, setLoadingCaptcha] = useState(true);
    const langMetadata = LocaleMetadata[lang];
    const localeDict = dictionary[lang];
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
        (e) => {
            // Prevent form submit
            e.preventDefault();

            setMessageStatus("sending");

            // Get form data
            const form = e.currentTarget;
            const formData = new FormData(form);

            // if (formData.get("g-recaptcha-response")) {
            formData.set("locale", lang);

            // Send data using the fetch api
            fetch("/api/contact-message", {
                method: "POST",
                body: formData,
            })
                .then(async (response) => {
                    if (response.status === 200) {
                        form.reset();
                        setMessageStatus("sent");
                        return response.text();
                    } else {
                        setMessageStatus("error");
                    }
                })
                .catch((error) => {
                    console.error(error);
                    setMessageStatus("error");
                });
            // } else {
            //     alert(localeDict.please_complete_captcha);
            //     setMessageStatus("null");
            // }

            // Prevent html form submit
            return false;
        },
        [
            setMessageStatus,
            langMetadata._locale,
            localeDict.please_complete_captcha,
            lang,
        ]
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
