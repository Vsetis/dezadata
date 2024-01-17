export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const formatCurrency = (amount, currency) => {
  const formattedAmount = new Intl.NumberFormat("cs-CZ", {
    style: "decimal",
    minimumFractionDigits: typeof currency === "boolean" && currency ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(amount);
  return formattedAmount.replace(/\s/g, ".");
};
