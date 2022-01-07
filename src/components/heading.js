const Heading = () => {
 const months = [
    { month: "January", payDate: "01/29/2021", time: "00:00:00" },
    { month: "February", payDate: "02/26/2021", time: "00:00:00" },
    { month: "March", payDate: "03/31/2021", time: "00:00:00" },
    { month: "April", payDate: "04/30/2021", time: "00:00:00" },
    { month: "May", payDate: "05/28/2021", time: "00:00:00" },
    { month: "June", payDate: "06/30/2021", time: "00:00:00" },
    { month: "July", payDate: "07/30/2021", time: "00:00:00" },
    { month: "August", payDate: "08/31/2021", time: "00:00:00" },
    { month: "September", payDate: "00/30/2021", time: "00:00:00" },
    { month: "October", payDate: "10/29/2021", time: "00:00:00" },
    { month: "November", payDate: "11/30/2021", time: "00:00:00" },
    { month: "December", payDate: "12/24/2021", time: "00:00:00" }
  ];
  const d = new Date();
  return months[d.getMonth()];
};

export default Heading;
