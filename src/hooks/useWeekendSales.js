import { useEffect, useState } from "react";

const parseDate = (dateString) => {
  if (!dateString) return null;
  const [year, month, day] = dateString.split("-").map(Number);
  return isNaN(year) || isNaN(month) || isNaN(day)
    ? null
    : new Date(year, month - 1, day);
};

const useWeekendSales = (data) => {
  const [totalPricesByModel, setTotalPricesByModel] = useState([]);

  useEffect(() => {
    const updatedTotalPricesByModel = data.reduce(
      (acc, { name, price, sellDate, vat }) => {
        const parsedSellDate = parseDate(sellDate);

        if (
          parsedSellDate &&
          (parsedSellDate.getDay() === 0 || parsedSellDate.getDay() === 6)
        ) {
          const existingModel = acc.find((entry) => entry.modelName === name);

          if (existingModel) {
            existingModel.totalPrice += parseFloat(price);
          } else {
            acc.push({
              modelName: name,
              totalPrice: parseFloat(price),
              vat: parseFloat(vat),
            });
          }
        } else if (!acc.some((entry) => entry.modelName === name)) {
          acc.push({ modelName: name, totalPrice: 0, vat: parseFloat(vat) });
        }

        return acc;
      },
      []
    );

    setTotalPricesByModel(updatedTotalPricesByModel);
  }, [data]);

  return { calculatedSales: totalPricesByModel };
};

export default useWeekendSales;
