import React from 'react';
import './Card.css';

const Card = ({ title, count, description, descriptionColor, backgroundColor }) => {
  return (
    <div className="card" style={{ backgroundColor }}>
      <div className="card-title">{title}</div>
      <div className="card-count">{count}</div>
      <div className="card-description" style={{ color: descriptionColor }}>
        {description}
      </div>
    </div>
  );
};

export default Card;
