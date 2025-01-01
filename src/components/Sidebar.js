import React from 'react';
import './Sidebar.css';
import { FiGrid, FiUser, FiCalendar, FiUsers, FiSettings } from 'react-icons/fi';
import { MdSupport } from 'react-icons/md';
import pic from '../assets/logo.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div>
        <img src={pic} alt="logo" width="142.99 px" height="36.8px" className='logo'/>
      </div>

      <div className="menu">

        <div className="menu-section">
          <h4>MAIN MENU</h4>
          <ul>
            <li className="active">
              <FiGrid className="iconactive" />
              Dashboard
            </li>
            <li>
              <FiUser className="icon" />
              Recruitment
            </li>
            <li>
              <FiCalendar className="icon" />
              Schedule
            </li>
            <li>
              <FiUsers className="icon" />
              Employee
            </li>
            <li>
              <FiSettings className="icon" />
              Department
            </li>
          </ul>
        </div>
        <div className="menu-section">
          <h4>OTHER</h4>
          <ul>
            <li>
              <MdSupport className="icon" />
              Support
            </li>
            <li>
              <FiSettings className="icon" />
              Settings
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default Sidebar;
