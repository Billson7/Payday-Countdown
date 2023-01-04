import moment from "moment";

const todaysDate = moment().format("L");

export const getPayDateChecker = (payDate) =>
  todaysDate !== payDate ? "a countdown to" : "";
