import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, Button, TextField } from '@mui/material';
import axios from 'axios';

// Sample investment plans for Indian middle-class families
const investmentPlans = [
  { id: 1, name: "Public Provident Fund (PPF)", interestRate: 7.1, description: "Government-backed long-term savings scheme." },
  { id: 2, name: "Fixed Deposit (FD)", interestRate: 6.5, description: "Safe investment with guaranteed returns." },
  { id: 3, name: "Mutual Funds", interestRate: 12, description: "Market-linked investments with potential for higher returns." },
  { id: 4, name: "Stocks", interestRate: "Varies", description: "Direct investment in companies with potential high returns." },
  { id: 5, name: "National Pension System (NPS)", interestRate: 8, description: "Long-term retirement savings scheme." }
];

const InvestmentPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [amount, setAmount] = useState('');
  const [returns, setReturns] = useState(null);

  // Function to handle selecting a plan
  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setReturns(null); // Reset returns when a new plan is selected
  };

  // Function to calculate returns based on the selected plan
  const calculateReturns = () => {
    if (selectedPlan && amount) {
      let calculatedReturns;
      if (typeof selectedPlan.interestRate === 'string') {
        // For stocks, we could integrate a real-time API to get current prices/returns
        calculatedReturns = "Interest rate varies with the market.";
      } else {
        calculatedReturns = (amount * selectedPlan.interestRate) / 100; // Simple interest calculation
      }
      setReturns(calculatedReturns);
    }
  };

  return (
    <Container maxWidth="md" style={{ paddingTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>Investment Plans for Indian Families</Typography>
      <Typography variant="body1" gutterBottom>Select an investment plan that best suits your needs.</Typography>
      
      {investmentPlans.map((plan) => (
        <Card key={plan.id} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6">{plan.name}</Typography>
            <Typography variant="body2">{plan.description}</Typography>
            <Typography variant="body2">Interest Rate: {plan.interestRate}%</Typography>
            <Button 
              variant="contained" 
              color="primary" 
              style={{ marginTop: '0.5rem' }}
              onClick={() => handleSelectPlan(plan)}
            >
              Select {plan.name}
            </Button>
          </CardContent>
        </Card>
      ))}

      {selectedPlan && (
        <div style={{ marginTop: '2rem' }}>
          <Typography variant="h5" gutterBottom>You selected {selectedPlan.name}</Typography>
          
          <TextField 
            label="Enter amount to invest" 
            variant="outlined" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)} 
            type="number"
            fullWidth
            style={{ marginBottom: '1rem' }}
          />

          <Button 
            variant="contained" 
            color="secondary" 
            onClick={calculateReturns}
            disabled={!amount}
          >
            Calculate Returns
          </Button>

          {returns !== null && (
            <Typography variant="h6" style={{ marginTop: '1rem' }}>
              Estimated Returns: {typeof returns === 'string' ? returns : `₹${returns.toFixed(2)}`}
            </Typography>
          )}
        </div>
      )}
    </Container>
  );
};

export default InvestmentPlans;