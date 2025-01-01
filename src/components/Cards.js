import React from 'react';
import Card from './Card';

const Cards = () => {
  const cardData = [
    {
      title: 'Available Position',
      count: '24',
      description: '4 Urgently needed',
      descriptionColor: '#FF4D4F',
      backgroundColor: '#FFE6E6',
    },
    {
      title: 'Job Open',
      count: '10',
      description: '4 Active hiring',
      descriptionColor: '#3786F1',
      backgroundColor: '#E8F0FB',
    },
    {
      title: 'New Employees',
      count: '24',
      description: '4 Department',
      descriptionColor: '#FF77E9',
      backgroundColor: '#FCE6FF',
    },
  ];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          count={card.count}
          description={card.description}
          descriptionColor={card.descriptionColor}
          backgroundColor={card.backgroundColor}
        />
      ))}
    </div>
  );
};

export default Cards;
