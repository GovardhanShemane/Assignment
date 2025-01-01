// components/Navbar.js
import React from 'react';
import './Navbar.css';
import { LuSearch , LuMessageSquareMore } from "react-icons/lu";
import { BsBellFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import pic from '../assets/b.jpg';
function Navbar() {
  return (
    <nav className="navbar">

    <div className="search-box">
     <input type="text" placeholder="Search" />
        <LuSearch />
      </div>

      <div className="nav-actions">

        <div className="notification">
        <BsBellFill />
          <span className="dot"></span>
        </div>

        <div >
       <LuMessageSquareMore />
          <span className="dot"></span>
        </div>

        <div className="profile">
          <img src={pic} alt="Profile" />
          <span>Admirra John</span>
          <MdKeyboardArrowDown />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
