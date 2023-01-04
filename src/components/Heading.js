export const Heading = () => {
 const months = [
    { month: "January", payDate: "01/27/2023", time: "00:00:00" },
    { month: "February", payDate: "02/24/2023", time: "00:00:00" },
    { month: "March", payDate: "03/31/2023", time: "00:00:00" },
    { month: "April", payDate: "04/28/2023", time: "00:00:00" },
    { month: "May", payDate: "05/26/2023", time: "00:00:00" },
    { month: "June", payDate: "06/30/2023", time: "00:00:00" },
    { month: "July", payDate: "07/28/2023", time: "00:00:00" },
    { month: "August", payDate: "08/25/2023", time: "00:00:00" },
    { month: "September", payDate: "09/29/2023", time: "00:00:00" },
    { month: "October", payDate: "10/27/2023", time: "00:00:00" },
    { month: "November", payDate: "11/30/2023", time: "00:00:00" },
    { month: "Christmas", payDate: "12/22/2023", time: "00:00:00" }
  ];
  const d = new Date();
  return months[d.getMonth()];
};
