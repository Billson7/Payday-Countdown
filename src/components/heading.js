const heading = () => {
  const months = [
    { month: "January", payDate: "27/01/2020" },
    { month: "February", payDate: "02/28/2020" },
    { month: "March", payDate: "03/29/2020" },
    { month: "April", payDate: "04/30/2020" },
    { month: "May", payDate: "05/31/2020" },
    { month: "June", payDate: "06/28/2020" },
    { month: "July", payDate: "07/31/2020" },
    { month: "August", payDate: "08/30/2020" },
    { month: "September", payDate: "09/30/2020" },
    { month: "October", payDate: "10/31/2020" },
    { month: "November", payDate: "11/29/2020" },
    { month: "Decemeber", payDate: "12/24/2020" }
  ];
  const d = new Date();
  return months[d.getMonth()];
};

export default heading;
