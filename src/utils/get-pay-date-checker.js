import moment from "moment";

export const getPayDateChecker = (payDate) => {
  const todaysDate = moment().format("L");
  return todaysDate === payDate ? "" : "a countdown to";
};
