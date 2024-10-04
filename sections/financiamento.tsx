import { useSignal, useComputed } from "@preact/signals";

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
  const vehicleValue = useSignal("");
  const downPayment = useSignal("");
  const installments = useSignal("12");

  const monthlyPayment = useComputed(() => {
    const principal = Number(vehicleValue.value) - Number(downPayment.value);
    const rate = 0.0199;
    const periods = Number(installments.value);

    if (principal > 0 && periods > 0) {
      const payment = (principal * rate * Math.pow(1 + rate, periods)) / (Math.pow(1 + rate, periods) - 1);
      return Number(payment.toFixed(2));
    }
    return null;
  });

  return (
    <div class="max-w-md mx-auto p-6 rounded-lg shadow-lg" style={{ backgroundColor: secondaryColor }}>
      <h2 class="text-2xl font-bold mb-4" style={{ color: primaryColor }}>{title}</h2>
      <p class="mb-6" style={{ color: primaryColor }}>{description}</p>
      
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" style={{ color: primaryColor }}>Vehicle Value (R$)</label>
        <input
          type="number"
          value={vehicleValue.value}
          onInput={(e) => vehicleValue.value = (e.target as HTMLInputElement).value}
          class="w-full px-3 py-2 border rounded-md"
          style={{ borderColor: primaryColor }}
          required
        />
      </div>
      
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" style={{ color: primaryColor }}>Down Payment (R$)</label>
        <input
          type="number"
          value={downPayment.value}
          onInput={(e) => downPayment.value = (e.target as HTMLInputElement).value}
          class="w-full px-3 py-2 border rounded-md"
          style={{ borderColor: primaryColor }}
          required
        />
      </div>
      
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" style={{ color: primaryColor }}>Number of Installments</label>
        <select
          value={installments.value}
          onChange={(e) => installments.value = (e.target as HTMLSelectElement).value}
          class="w-full px-3 py-2 border rounded-md"
          style={{ borderColor: primaryColor }}
          required
        >
          <option value="12">12 months</option>
          <option value="24">24 months</option>
          <option value="36">36 months</option>
          <option value="48">48 months</option>
        </select>
      </div>
      
      {monthlyPayment.value !== null && (
        <div class="mt-6 text-center">
          <h3 class="text-xl font-bold mb-2" style={{ color: primaryColor }}>Monthly Payment:</h3>
          <p class="text-2xl font-bold" style={{ color: primaryColor }}>
            R$ {monthlyPayment.value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      )}
    </div>
  );
}