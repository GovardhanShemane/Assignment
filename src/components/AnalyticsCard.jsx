import React from 'react';
import './AnalyticsCard.css';

const AnalyticsCard = ({ title, stat, subStats, growth, growthColor, graph }) => {
  return (
    <div className="analytics-card">
      <div className="analytics-card-header">
        <h3>{title}</h3>
      </div>
      <div className="analytics-card-body">
        <div className="analytics-card-main">
          <div className="analytics-card-stat">{stat}</div>
          <div className="analytics-card-substats">
            {subStats.map((subStat, index) => (
              <p key={index}>{subStat}</p>
            ))}
          </div>
        </div>
        <div className="analytics-card-graph">{graph}</div>
      </div>
      {growth && (
        <div className="analytics-card-growth" style={{ color: growthColor }}>
          {growth}
        </div>
      )}
    </div>
  );
};

export default AnalyticsCard;
