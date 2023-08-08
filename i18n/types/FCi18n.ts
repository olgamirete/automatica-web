import { FC } from "react";
import { Locale } from "./Locale";

type FCi18n<T = {}> = FC<T & { lang: Locale }>;

export default FCi18n;
