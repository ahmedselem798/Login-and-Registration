// import React, { useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Dashboard() {
//   const navigate = useNavigate();
//   axios.defaults.withCredentials = true;

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/dashboard")
//       .then((res) => {
//         if (res.dara === "Success") {
//           console.log("In Dashboard");
//         } else {
//           navigate("/login");
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <div>
//       <h1>Dashboard Page</h1>
//     </div>
//   );
// }

// export default Dashboard;
