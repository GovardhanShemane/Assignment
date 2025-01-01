// components/SecondRectangle.js
import React from 'react';
import Navbar from './Navbar';
import './Dashboard.css';
import Cards from './Cards';
import AnalyticsCards from './AnalyticsCards';
import Announcement  from './Announcement';
import RecentlyActivity from './RecentlyActivity';
import UpcomingSchedule from './UpcomingSchedule';


function Dashboard() {
  return (
    <div className="second-rectangle">
      <div>
      <Navbar />
      </div>

      <div>
        <h1 className='dashboard'> Dashboard </h1>
    
       <Cards/>
     

    
      <AnalyticsCards/>
    
      <Announcement/>
    </div>
    <RecentlyActivity />
    <UpcomingSchedule />
    </div>
  );
}

export default Dashboard;
