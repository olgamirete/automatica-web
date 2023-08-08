import { ReactNode } from "react";
import { Locale } from "./Locale";

type SingleDictionary = Record<string, ReactNode>;

type Dictionary<T extends SingleDictionary> = Record<Locale, T>;
export type DictionaryObject<T> = Record<Locale, T>;

export default Dictionary;
