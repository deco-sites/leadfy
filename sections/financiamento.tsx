import React, { useState } from 'react';

const FinancingSimulator = () => {
  const [vehicleValue, setVehicleValue] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [installments, setInstallments] = useState(12);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const interestRate = 1.99 / 100;

  const calculatePayment = () => {
    const financedAmount = vehicleValue - downPayment;
    const rate = Math.pow(1 + interestRate, installments);
    const monthlyPayment = (financedAmount * interestRate * rate) / (rate - 1);
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div>
      <h2>Financing Simulator</h2>
      <div>
        <label>Vehicle Value (R$): </label>
        <input
          type="number"
          value={vehicleValue}
          onChange={(e) => setVehicleValue(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Down Payment (R$): </label>
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Number of Installments: </label>
        <select value={installments} onChange={(e) => setInstallments(parseInt(e.target.value))}>
          <option value={12}>12x</option>
          <option value={24}>24x</option>
          <option value={36}>36x</option>
          <option value={48}>48x</option>
        </select>
      </div>
      <button onClick={calculatePayment}>Simulate</button>
      {monthlyPayment > 0 && (
        <div>
          <h3>Monthly Payment: R$ {monthlyPayment}</h3>
        </div>
      )}
    </div>
  );
};

export default FinancingSimulator;
