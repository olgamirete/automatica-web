import ReactGA from 'react-ga4';
import en from "lang/en";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const DEFAULT_LANGUAGE = en;

const useLanguage = (): [
  typeof DEFAULT_LANGUAGE,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [langCode, setLangCode] = useState<string>(
    localStorage.getItem("langCode") || DEFAULT_LANGUAGE._code
  );
  const { pathname } = useLocation();

  useEffect(() => {
    localStorage.setItem("langCode", langCode);
    
    // Send pageview with a custom path
    ReactGA.event({
        category: "language",
        action: "change",
        label: langCode, // optional
      });
    
  }, [langCode]);

  useEffect(() => {
    const possibleLangCode = pathname.split("/")[1];
    if (
      availableLanguages.find((avLang) => avLang._code === possibleLangCode)
    ) {
      setLangCode(possibleLangCode);
    }
  }, [pathname]);

  const selectedLanguage = availableLanguages.find(
    (avLang) => avLang._code === langCode
  );

  return [
    selectedLanguage
      ? (selectedLanguage as typeof DEFAULT_LANGUAGE)
      : DEFAULT_LANGUAGE,
    setLangCode,
  ];
};

export default useLanguage;
