// src/WealthDisplay.js
import React from 'react';
import './WealthDisplay.css'; // Import CSS for styling

const WealthDisplay = ({ wealthGained, investedAmount }) => {
  const totalWealth = wealthGained + investedAmount; // Calculate total wealth

  return (
    <div className="wealth-display">
      <div className="progress-container">
        <div
          className="progress-bar principal"
          style={{ width: `${(investedAmount / totalWealth) * 100}%` }}
        />
        <div
          className="progress-bar interest"
          style={{ width: `${(wealthGained / totalWealth) * 100}%` }}
        />
      </div>
      <div className="financial-summary">
        <h3>Wealth Overview</h3>
        <p>Wealth Gained: ₹{wealthGained.toLocaleString()}</p>
        <p>Invested Amount: ₹{investedAmount.toLocaleString()}</p>
        <p>Total Wealth: ₹{totalWealth.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default WealthDisplay;
