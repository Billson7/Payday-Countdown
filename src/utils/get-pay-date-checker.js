import { format } from "date-fns";

const todaysDate = format(new Date(), "ee/MM/yyyy");

export const getPayDateChecker = (payDate) =>
  todaysDate !== payDate ? "a countdown to" : "";
