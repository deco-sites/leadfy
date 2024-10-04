import React, { useState } from 'react';

interface Props {
  title?: string;
  description?: string;
  primaryColor?: string;
  secondaryColor?: string;
  buttonText?: string;
}

export default function FinancingSimulator({
  title = "Vehicle Financing Simulator",
  description = "Calculate your monthly payments for vehicle financing",
  primaryColor = "#4A5568",
  secondaryColor = "#E2E8F0",
  buttonText = "Simulate Financing",
}: Props) {
  const [vehicleValue, setVehicleValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [installments, setInstallments] = useState("12");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const principal = Number(vehicleValue) - Number(downPayment);
    const rate = 0.0199; // 1.99% monthly interest rate
    const periods = Number(installments);

    if (principal > 0 && periods > 0) {
      const payment = (principal * rate * Math.pow(1 + rate, periods)) / (Math.pow(1 + rate, periods) - 1);
      setMonthlyPayment(Number(payment.toFixed(2)));
    } else {
      setMonthlyPayment(null);
    }
    setShowResult(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg" style={{ backgroundColor: secondaryColor }}>
      <h2 className="text-2xl font-bold mb-4" style={{ color: primaryColor }}>{title}</h2>
      <p className="mb-6" style={{ color: primaryColor }}>{description}</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" style={{ color: primaryColor }}>
            Vehicle Value (R$)
          </label>
          <input
            type="number"
            value={vehicleValue}
            onChange={(e) => setVehicleValue(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            style={{ borderColor: primaryColor }}
            required
            min="0"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" style={{ color: primaryColor }}>
            Down Payment (R$)
          </label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            style={{ borderColor: primaryColor }}
            required
            min="0"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1" style={{ color: primaryColor }}>
            Number of Installments
          </label>
          <select
            value={installments}
            onChange={(e) => setInstallments(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            style={{ borderColor: primaryColor }}
            required
          >
            <option value="12">12 months</option>
            <option value="24">24 months</option>
            <option value="36">36 months</option>
            <option value="48">48 months</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-md text-white font-bold transition-colors duration-300 hover:opacity-90"
          style={{ backgroundColor: primaryColor }}
        >
          {buttonText}
        </button>
      </form>
      {showResult && monthlyPayment !== null && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>Monthly Payment:</h3>
          <p className="text-2xl font-bold" style={{ color: primaryColor }}>
            R$ {monthlyPayment.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      )}
      {showResult && monthlyPayment === null && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>Invalid Input</h3>
          <p className="text-lg" style={{ color: primaryColor }}>Please check your input values and try again.</p>
        </div>
      )}
    </div>
  );
}