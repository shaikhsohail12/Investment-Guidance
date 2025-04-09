// src/SipCalculator.js

import React, { useState } from 'react';
import WealthDisplay from './WealthDisplay'; // Import the WealthDisplay component
import './SipCalculator.css'; // Import CSS for styling

const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [annualReturn, setAnnualReturn] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [futureValue, setFutureValue] = useState(null);
  const [wealthGained, setWealthGained] = useState(null);
  const [investedAmount, setInvestedAmount] = useState(null);

  const calculateSIP = () => {
    const monthlyRate = annualReturn / 12 / 100;
    const totalMonths = investmentDuration * 12;
    const futureValue =
      (monthlyInvestment * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate)) *
      (1 + monthlyRate);

    // Round the future value to the nearest whole number
    const roundedFutureValue = Math.round(futureValue);
    setFutureValue(roundedFutureValue);

    // Calculate wealth gained and invested amount
    const totalInvestedAmount = monthlyInvestment * totalMonths;
    const totalWealthGained = roundedFutureValue - totalInvestedAmount;

    // Update state for wealth gained and invested amount
    setInvestedAmount(totalInvestedAmount);
    setWealthGained(totalWealthGained);
  };

  return (
    <div className="sip-calculator">
      <h2>SIP Calculator</h2>
      <div className="input-group">
        <label>
          Monthly Investment Amount (INR):
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Expected Annual Return Rate (%):
          <input
            type="range"
            min="0"
            max="20"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(Number(e.target.value))}
          />
          <span>{annualReturn}%</span>
        </label>
      </div>
      <div className="input-group">
        <label>
          Investment Duration (years):
          <input
            type="range"
            min="1"
            max="30"
            value={investmentDuration}
            onChange={(e) => setInvestmentDuration(Number(e.target.value))}
          />
          <span>{investmentDuration} years</span>
        </label>
      </div>
      <button onClick={calculateSIP}>Calculate</button>
      {futureValue !== null && (
        <div className="result">
          <h3>Future Value of Investment: ₹{futureValue.toLocaleString()}</h3>
          <WealthDisplay wealthGained={wealthGained} investedAmount={investedAmount} />
        </div>
      )}
    </div>
  );
};

export default SipCalculator;
