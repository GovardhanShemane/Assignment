import React from 'react';
import AnalyticsCard from './AnalyticsCard';
import Frame1 from '../assets/Frame 52.png';
import Frame2  from '../assets/Frame 52 (1).png'
const AnalyticsCards = () => {
  const analyticsData = [
    {
      title: 'Total Employees',
      stat: '216',
      subStats: ['120 Men', '96 Women'],
      // growth: '+2% Past month',
      growthColor: '#FF4D4F',
      graph: <img src={Frame1} alt="Growth Graph" />, 
    },
    {
      title: 'Talent Request',
      stat: '16',
      subStats: ['6 Men', '10 Women'],
      // growth: '+5% Past month',
      growthColor: '#FF4D4F',
      graph: <img src={Frame2} alt="Growth Graph" />, 
    },
  ];

  return (
    <div className="analytics-cards-container">
      {analyticsData.map((data, index) => (
        <AnalyticsCard
          key={index}
          title={data.title}
          stat={data.stat}
          subStats={data.subStats}
          growth={data.growth}
          growthColor={data.growthColor}
          graph={data.graph}
        />
      ))}
    </div>
  );
};

export default AnalyticsCards;
