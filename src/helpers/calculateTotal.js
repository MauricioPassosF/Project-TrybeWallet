export const calculateTotal = (expenses) => {
  if (expenses.length === 0) {
    return '0.00';
  }
  return expenses
    .map(({ value, currency, exchangeRates }) => Number(
      (Number(value) * Number(exchangeRates[currency].ask)).toFixed(2),
    ))
    .reduce((add, cur) => add + cur, 0)
    .toFixed(2);
};

export const calculateValue = ({ value, currency, exchangeRates }) => Number(
  Number(value) * Number(exchangeRates[currency].ask),
).toFixed(2);
