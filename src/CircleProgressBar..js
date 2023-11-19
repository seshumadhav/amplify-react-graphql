import React from 'react';
import './CircleProgressBar.css'; // Import custom CSS for circular progress bar styling

const CircleProgressBar = ({ score, maxScore }) => {
  const percentage = (score / maxScore) * 100;

  return (
    <div className="circle-progress-container">
      <div className="circle-progress">
        <div className="circle-progress-fill" style={{ transform: `rotate(${percentage}deg)` }}></div>
      </div>
      <div className="circle-text">{score}</div>
    </div>
  );
};

export default CircleProgressBar;
