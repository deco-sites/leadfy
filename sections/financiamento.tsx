import { useState } from "preact/hooks";

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  description?: string;
  /**
   * @format color-input
   */
  primaryColor?: string;
  /**
   * @format color-input
   */
  secondaryColor?: string;
}

export default function FinancingSimulator({
  title = "Vehicle Financing Simulator",
  description = "Calculate your monthly payments for vehicle financing",
  primaryColor = "#4A5568",
  secondaryColor = "#E2E8F0",
}: Props) {
  const [vehicleValue, setVehicleValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [installments, setInstallments] = useState("12");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculateMonthlyPayment = () => {
    const principal = Number(vehicleValue) - Number(downPayment);
    const rate = 0.0199; // 1.99 monthly interest rate
    const periods = Number(installments);

    const payment = (principal * rate * Math.pow(1 + rate, periods)) / (Math.pow(1 + rate, periods) - 1);
    setMonthlyPayment(Number(payment.toFixed(2)));
  };

  return (
    <div class="max-w-md mx-auto p-6 rounded-lg shadow-lg" style={{ backgroundColor: secondaryColor }}>
      <h2 class="text-2xl font-bold mb-4" style={{ color: primaryColor }}>{title}</h2>
      <p class="mb-6" style={{ color: primaryColor }}>{description}</p>
      
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" style={{ color: primaryColor }}>Vehicle Value (R$)</label>
        <input
          type="number"
          value={vehicleValue}
          onInput={(e) => setVehicleValue((e.target as HTMLInputElement).value)}
          class="w-full px-3 py-2 border rounded-md"
          style={{ borderColor: primaryColor }}
        />
      </div>
      
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" style={{ color: primaryColor }}>Down Payment (R$)</label>
        <input
          type="number"
          value={downPayment}
          onInput={(e) => setDownPayment((e.target as HTMLInputElement).value)}
          class="w-full px-3 py-2 border rounded-md"
          style={{ borderColor: primaryColor }}
        />
      </div>
      
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" style={{ color: primaryColor }}>Number of Installments</label>
        <select
          value={installments}
          onChange={(e) => setInstallments((e.target as HTMLSelectElement).value)}
          class="w-full px-3 py-2 border rounded-md"
          style={{ borderColor: primaryColor }}
        >
          <option value="12">12 months</option>
          <option value="24">24 months</option>
          <option value="36">36 months</option>
          <option value="48">48 months</option>
        </select>
      </div>
      
      <button
        onClick={calculateMonthlyPayment}
        class="w-full py-2 px-4 rounded-md text-white font-medium"
        style={{ backgroundColor: primaryColor }}
      >
        Simulate
      </button>
      
      {monthlyPayment !== null && (
        <div class="mt-6 text-center">
          <h3 class="text-xl font-bold mb-2" style={{ color: primaryColor }}>Monthly Payment:</h3>
          <p class="text-2xl font-bold" style={{ color: primaryColor }}>
            R$ {monthlyPayment.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      )}
    </div>
  );
}