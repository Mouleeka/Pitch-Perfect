

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import '../Styles/OwnerDash.css';
// import { Chart, registerables } from 'chart.js';

// // Register Chart.js components
// Chart.register(...registerables);

// const OwnerDashboard = () => {
//     const [turfDetails, setTurfDetails] = useState([]);
//     const [bookings, setBookings] = useState([]);
//     const [error, setError] = useState(null);

//     const chartRef = useRef(null); // Ref for the chart

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const turfRes = await axios.get('http://localhost:5000/api/turfs'); // Adjust endpoint as needed
//                 setTurfDetails(turfRes.data);

//                 const bookingsRes = await axios.get('http://localhost:5000/api/bookings'); // Adjust endpoint as needed
//                 setBookings(bookingsRes.data);
//             } catch (err) {
//                 setError('Error fetching data');
//                 console.error(err);
//             }
//         };

//         fetchData();
//     }, []);

//     useEffect(() => {
//         // Cleanup previous chart if it exists
//         if (chartRef.current) {
//             chartRef.current.destroy();
//         }

//         // Initialize the chart
//         chartRef.current = new Chart(document.getElementById('analyticsChart').getContext('2d'), {
//             type: 'bar', // You can change this to 'line' or another type
//             data: {
//                 labels: ['January', 'February', 'March', 'April'],
//                 datasets: [{
//                     label: 'Bookings',
//                     data: [10, 20, 30, 40],
//                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                     borderColor: 'rgba(75, 192, 192, 1)',
//                     borderWidth: 1,
//                 }]
//             },
//             options: {
//                 responsive: true,
//                 plugins: {
//                     legend: {
//                         position: 'top',
//                     },
//                     tooltip: {
//                         callbacks: {
//                             label: function(tooltipItem) {
//                                 return `Bookings: ${tooltipItem.raw}`;
//                             }
//                         }
//                     }
//                 }
//             }
//         });

//         // Cleanup function to destroy chart on component unmount
//         return () => {
//             if (chartRef.current) {
//                 chartRef.current.destroy();
//             }
//         };
//     }, [bookings]); // Dependencies that trigger chart update

//     return (
//         <div className="owner-dashboard">
//             <h1>Owner Dashboard</h1>

//             {/* Error Message */}
//             {error && <p className="error-message">{error}</p>}

//             {/* Analytics and Reporting */}
//             <section>
//                 <h2>Analytics Overview</h2>
//                 <div>
//                     <canvas id="analyticsChart"></canvas>
//                 </div>
//             </section>

//             {/* Turf Management */}
//             <section>
//                 <h2>Manage Turfs</h2>
//                 <div className="turf-management">
//                     <div className="turf-form">
//                         <h3>Add New Turf</h3>
//                         <input type="text" placeholder="Turf Name" />
//                         <textarea placeholder="Description"></textarea>
//                         <button>Add Turf</button>
//                     </div>
//                     {turfDetails.map(turf => (
//                         <div key={turf.id} className="turf-item">
//                             <h3>{turf.name}</h3>
//                             <button>Edit</button>
//                             <button>Delete</button>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Booking Management */}
//             <section>
//                 <h2>Booking Management</h2>
//                 <div className="booking-management">
//                     {bookings.map(booking => (
//                         <div key={booking.id} className="booking-item">
//                             <h3>{booking.details}</h3>
//                             <button>View</button>
//                             <button>Cancel</button>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Notifications System */}
//             <section>
//                 <h2>Notifications</h2>
//                 <div className="notification-management">
//                     <p>No new notifications.</p>
//                 </div>
//             </section>

//             {/* Settings */}
//             <section>
//                 <h2>Settings</h2>
//                 <div>
//                     <button>Site Settings</button>
//                     <button>Email Settings</button>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default OwnerDashboard;


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../Styles/OwnerDash.css';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

const OwnerDashboard = () => {
    const [turfDetails, setTurfDetails] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState(null);

    const chartRef = useRef(null); // Ref for the chart

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch turf details
                const turfRes = await axios.get('http://localhost:5000/api/turfs');
                setTurfDetails(turfRes.data);

                // Fetch bookings
                const bookingsRes = await axios.get('http://localhost:5000/api/bookings');
                setBookings(bookingsRes.data);
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Cleanup previous chart if it exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Initialize the chart
        const ctx = document.getElementById('analyticsChart').getContext('2d');
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April'],
                datasets: [{
                    label: 'Bookings',
                    data: [10, 20, 30, 40],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return `Bookings: ${tooltipItem.raw}`;
                            }
                        }
                    }
                }
            }
        });

        // Cleanup function to destroy chart on component unmount
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [bookings]); // Dependencies that trigger chart update

    return (
        <div className="owner-dashboard">
            <h1>Owner Dashboard</h1>

            {/* Error Message */}
            {error && <p className="error-message">{error}</p>}

            {/* Analytics and Reporting */}
            <section>
                <h2>Analytics Overview</h2>
                <div>
                    <canvas id="analyticsChart"></canvas>
                </div>
            </section>

            {/* Turf Management */}
            <section>
                <h2>Manage Turfs</h2>
                <div className="turf-management">
                    <div className="turf-form">
                        <h3>Add New Turf</h3>
                        <input type="text" placeholder="Turf Name" />
                        <textarea placeholder="Description"></textarea>
                        <button>Add Turf</button>
                    </div>
                    {turfDetails.length > 0 ? (
                        turfDetails.map(turf => (
                            <div key={turf.id} className="turf-item">
                                <h3>{turf.name}</h3>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        ))
                    ) : (
                        <p style={{color: 'black'}}>No turfs available.</p>
                    )}
                </div>
            </section>

            {/* Booking Management */}
            <section>
                <h2>Booking Management</h2>
                <div className="booking-management">
                    {bookings.length > 0 ? (
                        bookings.map(booking => (
                            <div key={booking.id} className="booking-item">
                                <h3>{booking.details}</h3>
                                <button>View</button>
                                <button>Cancel</button>
                            </div>
                        ))
                    ) : (
                        <p style={{color: 'black'}}>No bookings available.</p>
                    )}
                </div>
            </section>

            {/* Notifications System */}
            <section>
                <h2>Notifications</h2>
                <div className="notification-management">
                    <p style={{color:'black'}}>No new notifications.</p>
                </div>
            </section>

            {/* Settings */}
            <section>
                <h2>Settings</h2>
                <div>
                    <button>Site Settings</button>
                    <button>Email Settings</button>
                </div>
            </section>
        </div>
    );
};

export default OwnerDashboard;

