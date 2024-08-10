// Overview.jsx
import React from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import Overview from '../Styles/Overview.css';

const Overviews = ({ barData, pieData, lineData }) => {
  return (
    <>
      <div className="stats-container">
        <div className="stat-box">
          <h3>Total Bookings</h3>
          <p>200</p>
        </div>
        <div className="stat-box">
          <h3>Total Users</h3>
          <p>150</p>
        </div>
        <div className="stat-box">
          <h3>Revenue</h3>
          <p>$10,000</p>
        </div>
        <div className="stat-box">
          <h3>New Registers</h3>
          <p>5</p>
        </div>
      </div>
      <div className="chart-container">
        <div className="chart-box">
          <Bar data={barData} />
        </div>
        <div className="chart-box">
          <Pie data={pieData} />
        </div>
        <div className="chart-box">
          <Line data={lineData} />
        </div>
      </div>
    </>
  );
};

export default Overviews;
