import { ReactElement } from "react";

export default interface LanguageData {
  _code: string;
  _name: string;
  _flag: ReactElement;
  _locale: Intl.LocalesArgument;
  strings: Record<string, string>;
  elements: Record<string, ReactElement>;
}
