// src/BudgetingTips.js
import React, { useState } from 'react';
import './BudgetingTips.css';
import Chatbot from './Chatbot'; // Import the Chatbot component
import axios from 'axios'; // Make sure to import axios if not done already

const budgetingTips = [
  {
    id: 1,
    title: 'Set Clear Goals',
    description: `Setting clear financial goals is crucial for effective budgeting. 
    By defining both short-term and long-term objectives, such as saving for a vacation, 
    a house, or retirement, you create a roadmap for your financial journey. 
    Clear goals help you stay focused and motivated, making it easier to allocate funds 
    appropriately. Consider using the SMART criteria—Specific, Measurable, Achievable, 
    Relevant, and Time-bound—to create actionable financial goals that guide your budgeting 
    efforts.`
  },
  {
    id: 2,
    title: 'Track Your Spending',
    description: `To create a successful budget, it's essential to know where your money is going. 
    Tracking your spending allows you to identify patterns and areas where you may be overspending. 
    Use apps or spreadsheets to record your daily expenses and categorize them into needs and wants. 
    By analyzing your spending habits, you can make informed decisions about where to cut back and 
    how to allocate funds towards your goals more effectively.`
  },
  {
    id: 3,
    title: 'Create a Budget Plan',
    description: `Drafting a budget plan is the foundation of effective money management. 
    Start by calculating your total income and listing all fixed and variable expenses. 
    Allocate your income to cover essentials like housing, utilities, groceries, and transportation, 
    while also setting aside funds for savings and discretionary spending. 
    Regularly review your budget to ensure it aligns with your financial goals, making adjustments 
    as needed to stay on track.`
  },
  {
    id: 4,
    title: 'Reduce Unnecessary Expenses',
    description: `Identifying and reducing unnecessary expenses is vital for maintaining a healthy budget. 
    Review your spending to find subscriptions, memberships, or services that you don’t use or need. 
    Consider cooking at home instead of dining out, or canceling unused gym memberships. 
    Small changes can lead to significant savings over time, allowing you to redirect those funds 
    towards more important financial goals or to boost your savings.`
  },
  {
    id: 5,
    title: 'Build an Emergency Fund',
    description: `An emergency fund acts as a financial safety net, helping you manage unexpected expenses 
    without derailing your budget. Aim to save at least 3-6 months’ worth of living expenses in a 
    separate account to cover emergencies like medical bills, car repairs, or job loss. 
    Having this fund in place provides peace of mind and prevents the need to rely on credit cards 
    or loans, which can lead to debt.`
  },
  {
    id: 6,
    title: 'Review and Adjust Your Budget Regularly',
    description: `A budget is not a one-time task; it requires ongoing assessment and adjustments. 
    Regularly reviewing your budget helps you stay aligned with your financial goals and adapt to 
    changes in your circumstances. Set aside time each month to evaluate your spending, 
    savings progress, and any shifts in income or expenses. This proactive approach allows you 
    to make informed decisions and stay in control of your financial health.`
  },
  {
    id: 7,
    title: 'Automate Savings',
    description: `Automating your savings can help ensure you consistently set money aside for your goals. 
    Set up automatic transfers from your checking account to your savings account each month, 
    right after you receive your paycheck. This way, you prioritize saving without having to think 
    about it. Consider using high-yield savings accounts for better returns on your savings, 
    making it easier to reach your financial objectives.`
  },
  {
    id: 8,
    title: 'Use Budgeting Apps',
    description: `Budgeting apps can simplify the process of tracking your finances and managing your budget. 
    Many apps offer features like expense categorization, real-time tracking, and goal setting. 
    Using a budgeting app can help you stay organized, receive alerts for overspending, and visualize 
    your financial progress. Explore various apps to find one that best fits your budgeting style 
    and needs.`
  },
  {
    id: 9,
    title: 'Plan for Irregular Expenses',
    description: `Irregular expenses, such as annual subscriptions, car maintenance, and holiday shopping, 
    can catch you off guard if you don’t plan for them. Include these expenses in your budget by 
    estimating their costs and setting aside a portion of your monthly income to cover them. 
    By anticipating these costs, you can avoid financial stress and ensure you have the funds 
    available when needed.`
  },
  {
    id: 10,
    title: 'Limit Credit Card Use',
    description: `While credit cards can be useful for managing cash flow and earning rewards, 
    it's essential to use them wisely. Limit your credit card usage to avoid accumulating debt 
    and high interest charges. If you do use a credit card, aim to pay off the balance in full each month 
    to avoid interest fees. By being mindful of your credit card habits, you can maintain better control 
    over your finances and prevent unnecessary debt.`
  },
];

const BudgetingTips = () => {
  const [tip, setTip] = useState(null);

  const generateRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * budgetingTips.length);
    setTip(budgetingTips[randomIndex]);
  };

  return (
    <div className="budgeting-tips">
      <h1>Budgeting Tips</h1>
      <button onClick={generateRandomTip}>Get a Budgeting Tip!</button>
      {tip && (
        <div className="tip-item">
          <h2>{tip.title}</h2>
          <p>{tip.description}</p>
        </div>
      )}
      <Chatbot /> {/* Chatbot component is added here */}
    </div>
  );
};

export default BudgetingTips;
