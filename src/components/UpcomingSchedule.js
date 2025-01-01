import React from "react";
import "./UpcomingSchedule.css";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule-container">
      <h3>Upcoming Schedule</h3>
      <p className="date">Today, 13 Sep 2021</p>
      <div className="priority">
        <h4>Priority</h4>
        <div className="schedule-item">
          <p>Review candidate applications</p>
          <span>Today - 11:30 AM</span>
        </div>
      </div>
      <div className="other">
        <h4>Other</h4>
        <div className="schedule-item">
          <p>Interview with candidates</p>
          <span>Today - 10:30 AM</span>
        </div>
        <div className="schedule-item">
          <p>Short meeting with product designer from IT Department</p>
          <span>Today - 09:15 AM</span>
        </div>
      </div>
      <button className="create-schedule-button">Create a New Schedule</button>
    </div>
  );
};

export default UpcomingSchedule;
