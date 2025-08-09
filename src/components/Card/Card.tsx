import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div 
      className="h-100 p-4"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
        borderRadius: "15px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        transition: "all 0.3s ease",
        color: "white"
      }}
    >
      <div className="text-center mb-3" style={{ color: "#4dabf7" }}>
        {icon}
      </div>
      <h3 className="h5 text-center mb-3">{title}</h3>
      <p className="mb-0 text-center">{description}</p>
    </div>
  );
};

export default Card;