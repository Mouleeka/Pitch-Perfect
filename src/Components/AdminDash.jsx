// import React, { useState } from "react";
// import { Bar, Pie, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import "../Styles/AdminDash.css";

// ChartJS.register(
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Tooltip,
//   Legend
// );

// const AdminDashboard = () => {
//   const [view, setView] = useState("overview");
//   const [newTurf, setNewTurf] = useState({
//     location: "",
//     sport: "Football",
//     capacity: "",
//     amenities: "",
//     surfaceType: "Grass",
//     availableDays: [],
//     image: null,
//   });
//   const [turfs, setTurfs] = useState([]);
//   const [bookings, setBookings] = useState([
//     {
//       sport: "Football",
//       location: "Turf A",
//       date: "2023-08-12",
//       registeredPlayers: 10,
//       pendingSeats: 5,
//       players: {
//         booked: [
//           {
//             name: "Player 1",
//             email: "player1@example.com",
//             phone: "1234567890",
//             role: "Forward",
//           },
//           {
//             name: "Player 2",
//             email: "player2@example.com",
//             phone: "1234567891",
//             role: "Midfielder",
//           },
//           {
//             name: "Player 3",
//             email: "player3@example.com",
//             phone: "1234567892",
//             role: "Defender",
//           },
//         ],
//         pending: [
//           {
//             name: "Player 4",
//             email: "player4@example.com",
//             phone: "1234567893",
//             role: "Goalkeeper",
//           },
//         ],
//         canceled: [],
//       },
//     },
//     {
//       sport: "Basketball",
//       location: "Court B",
//       date: "2023-08-15",
//       registeredPlayers: 8,
//       pendingSeats: 4,
//       players: {
//         booked: [
//           {
//             name: "Player 5",
//             email: "player5@example.com",
//             phone: "1234567894",
//             role: "Guard",
//           },
//           {
//             name: "Player 6",
//             email: "player6@example.com",
//             phone: "1234567895",
//             role: "Forward",
//           },
//         ],
//         pending: [],
//         canceled: [
//           {
//             name: "Player 7",
//             email: "player7@example.com",
//             phone: "1234567896",
//             role: "Center",
//           },
//         ],
//       },
//     },
//   ]);

  // const barData = {
  //   labels: ["Football", "Basketball", "Tennis", "Badminton", "Swimming", "Cricket"],
  //   datasets: [
  //     {
  //       label: "Weekly Bookings",
  //       data: [15, 10, 5, 8, 4, 12],
  //       backgroundColor: "rgba(76, 175, 80, 0.6)",
  //     },
  //   ],
  // };

  // const pieData = {
  //   labels: ["Football", "Basketball", "Tennis", "Badminton", "Swimming", "Cricket"],
  //   datasets: [
  //     {
  //       label: "Bookings Share",
  //       data: [25, 15, 10, 20, 5, 25],
  //       backgroundColor: [
  //         "rgba(76, 175, 80, 0.6)",
  //         "rgba(129, 199, 132, 0.6)",
  //         "rgba(102, 187, 106, 0.6)",
  //         "rgba(67, 160, 71, 0.6)",
  //         "rgba(56, 142, 60, 0.6)",
  //         "rgba(51, 105, 30, 0.6)",
  //       ],
  //     },
  //   ],
  // };

  // const lineData = {
  //   labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  //   datasets: [
  //     {
  //       label: "Revenue ($)",
  //       data: [400, 700, 500, 900],
  //       fill: false,
  //       backgroundColor: "rgba(76, 175, 80, 0.6)",
  //       borderColor: "rgba(76, 175, 80, 1)",
  //     },
  //   ],
  // };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewTurf((prevTurf) => ({ ...prevTurf, [name]: value }));
//   };

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     setNewTurf((prevTurf) => {
//       if (checked) {
//         return { ...prevTurf, availableDays: [...prevTurf.availableDays, value] };
//       } else {
//         return {
//           ...prevTurf,
//           availableDays: prevTurf.availableDays.filter((day) => day !== value),
//         };
//       }
//     });
//   };

//   const handleFileChange = (e) => {
//     const { files } = e.target;
//     if (files.length > 0) {
//       setNewTurf((prevTurf) => ({ ...prevTurf, image: files[0] }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTurfs([...turfs, newTurf]);
//     setNewTurf({
//       location: "",
//       sport: "Football",
//       capacity: "",
//       amenities: "",
//       surfaceType: "Grass",
//       availableDays: [],
//       image: null,
//     });
//   };

//   const renderPlayers = (players) => (
//     <ul>
//       {players.map((player, index) => (
//         <li key={index}>
//           {player.name} - {player.role} - {player.email} - {player.phone}
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     <div className="dashboard-container">
//       <div className="side-panel">
//         <h2>Dashboard</h2>
//         <ul className="side-panel-list">
//           <li className={view === "overview" ? "active" : ""} onClick={() => setView("overview")}>
//             Overview
//           </li>
//           <li className={view === "addNewTurf" ? "active" : ""} onClick={() => setView("addNewTurf")}>
//             Add New Turf
//           </li>
//           <li className={view === "manageBookings" ? "active" : ""} onClick={() => setView("manageBookings")}>
//             Manage Bookings
//           </li>
//           <li className={view === "report" ? "active" : ""} onClick={() => setView("report")}>
//             Report
//           </li>
//           <li className={view === "profile" ? "active" : ""} onClick={() => setView("profile")}>
//             Profile
//           </li>
//           <li className={view === "logout" ? "active" : ""} onClick={() => setView("logout")}>
//             Logout
//           </li>
//         </ul>
//       </div>
//       <div className="content-container">
//         {view === "overview" && (
//           <>
//             <div className="stats-container">
//               <div className="stat-box">
//                 <h3>Total Bookings</h3>
//                 <p>200</p>
//               </div>
//               <div className="stat-box">
//                 <h3>Total Users</h3>
//                 <p>150</p>
//               </div>
//               <div className="stat-box">
//                 <h3>Revenue</h3>
//                 <p>$10,000</p>
//               </div>
//               <div className="stat-box">
//                 <h3>New Registers</h3>
//                 <p>5</p>
//               </div>
//             </div>
//             <div className="chart-container">
//               <div className="chart-box">
//                 <Bar data={barData} />
//               </div>
//               <div className="chart-box">
//                 <Pie data={pieData} />
//               </div>
//               <div className="chart-box">
//                 <Line data={lineData} />
//               </div>
//             </div>
//           </>
//         )}
//         {view === "addNewTurf" && (
//           <div className="add-turf-form">
//             <h1>Add New Turf</h1>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 Location:
//                 <input
//                   type="text"
//                   name="location"
//                   value={newTurf.location}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </label>
//               <label>
//                 Sport:
//                 <select
//                   name="sport"
//                   value={newTurf.sport}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="Football">Football</option>
//                   <option value="Basketball">Basketball</option>
//                   <option value="Tennis">Tennis</option>
//                   <option value="Badminton">Badminton</option>
//                   <option value="Swimming">Swimming</option>
//                   <option value="Cricket">Cricket</option>
//                 </select>
//               </label>
//               <label>
//                 Capacity:
//                 <input
//                   type="number"
//                   name="capacity"
//                   value={newTurf.capacity}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </label>
//               <label>
//                 Amenities:
//                 <textarea
//                   name="amenities"
//                   value={newTurf.amenities}
//                   onChange={handleInputChange}
//                   required
//                 ></textarea>
//               </label>
//               <label>
//                 Surface Type:
//                 <select
//                   name="surfaceType"
//                   value={newTurf.surfaceType}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="Grass">Grass</option>
//                   <option value="Astroturf">Astroturf</option>
//                   <option value="Clay">Clay</option>
//                   <option value="Synthetic">Synthetic</option>
//                 </select>
//               </label>
//               <label>
//                 Available Days:
//                 <div className="checkbox-group">
//                   <label>
//                     <input
//                       type="checkbox"
//                       name="availableDays"
//                       value="Monday"
//                       checked={newTurf.availableDays.includes("Monday")}
//                       onChange={handleCheckboxChange}
//                     />
//                     Monday
//                   </label>
//                   <label>
//                     <input
//                       type="checkbox"
//                       name="availableDays"
//                       value="Tuesday"
//                       checked={newTurf.availableDays.includes("Tuesday")}
//                       onChange={handleCheckboxChange}
//                     />
//                     Tuesday
//                   </label>
//                   <label>
//                     <input
//                       type="checkbox"
//                       name="availableDays"
//                       value="Wednesday"
//                       checked={newTurf.availableDays.includes("Wednesday")}
//                       onChange={handleCheckboxChange}
//                     />
//                     Wednesday
//                   </label>
//                   <label>
//                     <input
//                       type="checkbox"
//                       name="availableDays"
//                       value="Thursday"
//                       checked={newTurf.availableDays.includes("Thursday")}
//                       onChange={handleCheckboxChange}
//                     />
//                     Thursday
//                   </label>
//                   <label>
//                     <input
//                       type="checkbox"
//                       name="availableDays"
//                       value="Friday"
//                       checked={newTurf.availableDays.includes("Friday")}
//                       onChange={handleCheckboxChange}
//                     />
//                     Friday
//                   </label>
//                   <label>
//                     <input
//                       type="checkbox"
//                       name="availableDays"
//                       value="Saturday"
//                       checked={newTurf.availableDays.includes("Saturday")}
//                       onChange={handleCheckboxChange}
//                     />
//                     Saturday
//                   </label>
//                   <label>
//                     <input
//                       type="checkbox"
//                       name="availableDays"
//                       value="Sunday"
//                       checked={newTurf.availableDays.includes("Sunday")}
//                       onChange={handleCheckboxChange}
//                     />
//                     Sunday
//                   </label>
//                 </div>
//               </label>
//               <label>
//                 Upload Image:
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                 />
//               </label>
//               <button type="submit">Add Turf</button>
//             </form>
            // <div className="added-turfs">
            //   <h2>Added Turfs</h2>
            //   {turfs.length === 0 ? (
            //     <p>No turfs added yet.</p>
            //   ) : (
            //     <ul>
            //       {turfs.map((turf, index) => (
            //         <li key={index}>
            //           <strong>Location:</strong> {turf.location} | <strong>Sport:</strong> {turf.sport} | <strong>Capacity:</strong> {turf.capacity} | <strong>Amenities:</strong> {turf.amenities} | <strong>Surface Type:</strong> {turf.surfaceType} | <strong>Available Days:</strong> {turf.availableDays.join(", ")}
            //         </li>
            //       ))}
            //     </ul>
            //   )}
            // </div>
//           </div>
//         )}
//         {view === "manageBookings" && (
//           <div className="manage-bookings">
//             <h1>Manage Bookings</h1>
//             {bookings.map((booking, index) => (
//               <div key={index} className="booking">
//                 <h3>{booking.sport} at {booking.location}</h3>
//                 <p>Date: {booking.date}</p>
//                 <p>Registered Players: {booking.registeredPlayers}</p>
//                 <p>Pending Seats: {booking.pendingSeats}</p>
//                 <div className="players-section">
//                   <div className="booked-players">
//                     <h4>Booked Players</h4>
//                     {renderPlayers(booking.players.booked)}
//                   </div>
//                   <div className="pending-players">
//                     <h4>Pending Players</h4>
//                     {renderPlayers(booking.players.pending)}
//                   </div>
//                   <div className="canceled-players">
//                     <h4>Canceled Players</h4>
//                     {renderPlayers(booking.players.canceled)}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//         {view === "report" && (
//           <div className="report">
//             <h1>Report</h1>
//             <p>Generate and view reports here...</p>
//           </div>
//         )}
//         {view === "profile" && (
//           <div className="profile">
//             <h1>Profile</h1>
//             <p>View and edit your profile here...</p>
//           </div>
//         )}
//         {view === "logout" && (
//           <div className="logout">
//             <h1>Logout</h1>
//             <p>You have been logged out.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// AdminDashboard.jsx
import React, { useState } from "react";
import "../Styles/AdminDash.css";
import Overview from "./Overview";
import UsersList from "./UsersList";
import AddTurf from "./AddTurf";
import Bookings from "./Bookings";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// import AdminProfile from "./AdminProfile";
// import AdminLogout from "./AdminLogout";

const AdminDashboard = () => {
  const [view, setView] = useState("overview");

  // Sample data for charts
// Sample data structures for charts
const barData = {
  labels: ["Football", "Basketball", "Tennis", "Badminton", "Swimming", "Cricket"],
  datasets: [
    {
      label: "Weekly Bookings",
      data: [15, 10, 5, 8, 4, 12],
      backgroundColor: "rgba(76, 175, 80, 0.6)",
    },
  ],
};

const pieData = {
  labels: ["Football", "Basketball", "Tennis", "Badminton", "Swimming", "Cricket"],
  datasets: [
    {
      label: "Bookings Share",
      data: [25, 15, 10, 20, 5, 25],
      backgroundColor: [
        "rgba(76, 175, 80, 0.6)",
        "rgba(129, 199, 132, 0.6)",
        "rgba(102, 187, 106, 0.6)",
        "rgba(67, 160, 71, 0.6)",
        "rgba(56, 142, 60, 0.6)",
        "rgba(51, 105, 30, 0.6)",
      ],
    },
  ],
};

const lineData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Revenue ($)",
      data: [400, 700, 500, 900],
      fill: false,
      backgroundColor: "rgba(76, 175, 80, 0.6)",
      borderColor: "rgba(76, 175, 80, 1)",
    },
  ],
};

  const bookings = [
    {
      name: "Football Match",
      date: "2024-08-10",
      time: "10:00 AM",
      players: ["Alice", "Bob"],
    },
    {
      name: "Basketball Game",
      date: "2024-08-11",
      time: "2:00 PM",
      players: ["Charlie", "Dave"],
    },
  ];

  const renderPlayers = (players) => {
    return players.join(", ");
  };

  const handleAddTurf = (newTurf) => {
    console.log("New turf added:", newTurf);
  };
 
  return (
    <div className="dashboard-container">
      <div className="side-panel">
        <h2>Dashboard</h2>
        <ul className="side-panel-list">
          <li
            className={view === "overview" ? "active" : ""}
            onClick={() => setView("overview")}
          >
            Overview
          </li>
          <li
            className={view === "UsersList" ? "active" : ""}
            onClick={() => setView("UsersList")}
          >
            UsersList
          </li>
          <li
            className={view === "addNewTurf" ? "active" : ""}
            onClick={() => setView("addNewTurf")}
          >
            Add New Turf
          </li>
          <li
            className={view === "manageBookings" ? "active" : ""}
            onClick={() => setView("manageBookings")}
          >
            Manage Bookings
          </li>
          {/* <li
            className={view === "profile" ? "active" : ""}
            onClick={() => setView("profile")}
          >
            Admin Profile
          </li>
          <li
            className={view === "logout" ? "active" : ""}
            onClick={() => setView("logout")}
          >
            Logout
          </li> */}
        </ul>
      </div>
      <div className="content">
        {view === "overview" && (
          <Overview barData={barData} pieData={pieData} lineData={lineData} />
        )}
        {view === "UsersList" && <UsersList />}
        {view === "addNewTurf" && <AddTurf onAddTurf={handleAddTurf} />}
        {view === "manageBookings" && (
          <Bookings bookings={bookings} renderPlayers={renderPlayers} />
        )}

        {/* {view === "profile" && <AdminProfile />}
        {view === "logout" && <AdminLogout />} */}
      </div>
    </div>
  );
};

export default AdminDashboard;
