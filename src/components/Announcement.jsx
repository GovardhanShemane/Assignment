import React from 'react';
import { FaThumbtack, FaEllipsisH } from 'react-icons/fa'; // React icons for pin and ellipsis
import './Announcement.css';

const announcements = [
  {
    title: 'Outing schedule for every department',
    time: '5 Minutes ago',
  },
  {
    title: 'Meeting HR Department',
    time: 'Yesterday, 12:30 PM',
  },
  {
    title: 'IT Department need two more talents for UX/UI Designer position',
    time: 'Yesterday, 09:15 AM',
  },
];

const Announcement = () => {
  return (
    <div className="announcement-container">
      <div className="announcement-header">
        <h2>Announcement</h2>
        <div className="date-dropdown">
          <span>Today, 13 Sep 2021</span>
          {/* Add dropdown functionality if needed */}
        </div>
      </div>
      <div className="announcement-list">
        {announcements.map((item, index) => (
          <div className="announcement-item" key={index}>
            <div className="announcement-details">
              <h3>{item.title}</h3>
              <p>{item.time}</p>
            </div>
            <div className="announcement-actions">
              <FaThumbtack className="icon pin-icon" />
              <FaEllipsisH className="icon options-icon" />
            </div>
          </div>
        ))}
      </div>
      <div className="announcement-footer">
        <a href="/" className="see-all-link">See All Announcement</a>
      </div>
    </div>
  );
};

export default Announcement;
