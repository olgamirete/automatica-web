import React from "react";
import en from "lang/en";
import es from "lang/es";
import de from "lang/de";

const LangContext = React.createContext(en);

export const availableLanguages = [en, es, de];

export default LangContext;
