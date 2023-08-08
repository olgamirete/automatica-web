"use client";
import CustomFormInput from "@/components/CustomForm/CustomFormInput";
import CustomSubmitButton from "@/components/CustomForm/CustomSubmitButton";
import CustomTextAreaInput from "@/components/CustomForm/CustomTextAreaInput";
import useContactForm from "./useContactForm";
import AlertMessage from "../AlertMessage";
import FCi18n from "@/i18n/types/FCi18n";
import dictionary from "./dictionary";

const ContactForm: FCi18n<{}> = ({ lang }) => {
    const {
        formRef,
        handleSubmit,
        messageStatus,
        loadingCaptcha,
        setLoadingCaptcha,
    } = useContactForm(lang);
    const localeDict = dictionary[lang];

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit} className="px-2">
                <CustomFormInput
                    required
                    type="text"
                    name="name"
                    placeholder={localeDict.enter_your_name}
                    label={localeDict.name}
                    className="bg-light bg-opacity-75"
                    containerClassName="col-12"
                    labelClassName=""
                />
                <CustomFormInput
                    required
                    type="text"
                    name="company"
                    placeholder={localeDict.enter_your_company}
                    label={localeDict.company}
                    className="bg-light bg-opacity-75"
                    containerClassName="col-12 mt-2"
                    labelClassName=""
                />
                <CustomFormInput
                    required
                    type="email"
                    name="email"
                    placeholder={localeDict.enter_your_email_address}
                    label={localeDict.email}
                    className="bg-light bg-opacity-75"
                    containerClassName="col-12 mt-2"
                    labelClassName=""
                />
                <CustomTextAreaInput
                    required
                    name="message"
                    placeholder={localeDict.tell_us_why_you_write}
                    label={localeDict.message}
                    className="bg-light bg-opacity-75"
                    containerClassName="col-12 mt-2"
                    labelClassName=""
                />
                <div
                    className={`
                        mt-3 d-flex justify-content-center align-items-center
                        ${loadingCaptcha ? "d-none" : ""}
                    `}
                >
                    {/* <ReCaptcha
                        sitekey="6Le_JzEjAAAAAG_cagoUIoQW6hxKnAfe4sS7g9Th"
                        asyncScriptOnLoad={() => setLoadingCaptcha(false)}
                    /> */}
                </div>
                <CustomSubmitButton
                    lang={lang}
                    variant="dark"
                    sending={messageStatus === "sending"}
                    borderColor="light"
                    className="mt-3 w-100"
                />
                {(messageStatus === "error" || messageStatus === "sent") && (
                    <AlertMessage lang={lang} status={messageStatus} />
                )}
            </form>
        </>
    );
};

export default ContactForm;
