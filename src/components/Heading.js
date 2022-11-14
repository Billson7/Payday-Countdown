export const Heading = () => {
 const months = [
    { month: "January", payDate: "01/27/2022", time: "00:00:00" },
    { month: "February", payDate: "02/25/2022", time: "00:00:00" },
    { month: "March", payDate: "03/31/2022", time: "00:00:00" },
    { month: "April", payDate: "04/27/2022", time: "00:00:00" },
    { month: "May", payDate: "05/27/2022", time: "00:00:00" },
    { month: "June", payDate: "06/27/2022", time: "00:00:00" },
    { month: "July", payDate: "07/27/2022", time: "00:00:00" },
    { month: "August", payDate: "08/26/2022", time: "00:00:00" },
    { month: "September", payDate: "09/27/2022", time: "00:00:00" },
    { month: "October", payDate: "10/27/2022", time: "00:00:00" },
    { month: "November", payDate: "11/25/2022", time: "00:00:00" },
    { month: "December", payDate: "12/22/2022", time: "00:00:00" }
  ];
  const d = new Date();
  return months[d.getMonth()];
};
