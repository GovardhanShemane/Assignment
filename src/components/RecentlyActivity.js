import React from "react";
import "./RecentlyActivity.css";

const RecentlyActivity = () => {
  return (
    <div className="recently-activity-container">
      <h3>Recently Activity</h3>
      <p className="time">10:40 AM, Fri 10 Sept 2021</p>
      <h4>You Posted a New Job</h4>
      <p className="description">
        Kindly check the requirements and terms of work and make sure
        everything is right.
      </p>
      <p className="summary">Today you made 12 Activities</p>
      <button className="see-all-button">See All Activity</button>
    </div>
  );
};

export default RecentlyActivity;
