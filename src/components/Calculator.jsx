import useWeekendSales from "../hooks/useWeekendSales";
import { formatCurrency } from "../utils/formatting";

const Calculator = ({ cars }) => {
  const { calculatedSales } = useWeekendSales(cars);

  if (cars.length < 1) return null;

  return (
    <div className="border border-white/70 rounded">
      <table className="w-full font-semibold text-sm">
        <thead>
          <tr>
            <th className="text-start px-2 md:px-8 py-3">Název modelu</th>
            <th className="text-start px-2 md:px-8 py-3">Cena bez DPH</th>
            <th className="text-start px-2 md:px-8 py-3">Cena s DPH</th>
          </tr>
        </thead>
        <tbody>
          {calculatedSales.map(({ modelName, totalPrice, vat }) => (
            <tr className="border-t border-white/50" key={modelName}>
              <td className="px-2 md:px-8 py-3">{modelName}</td>
              <td className="px-2 md:px-8 py-3">
                {formatCurrency(totalPrice, true)}
              </td>
              <td className="px-2 md:px-8 py-3">
                {formatCurrency(totalPrice * (vat + 1), true)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
