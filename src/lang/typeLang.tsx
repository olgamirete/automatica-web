import { ReactElement } from "react";

export interface LanguageData {
  _code: string;
  _name: string;
  _flag: ReactElement;
  strings: Record<string, string>;
  elements: Record<string, ReactElement>;
}
