import { payDateDictionary } from "../utils/pay-date-dictionary";

export const Heading = () => payDateDictionary[new Date().getMonth()];
