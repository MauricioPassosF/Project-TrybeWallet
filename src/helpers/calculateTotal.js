export const calculateTotal = (expenses) => {
  if (expenses.length === 0) {
    return '0.00';
  }
  return expenses.reduce(((add, { value, currency, exchangeRates }) => add
    + Number((Number(value) * Number(exchangeRates[currency].ask)).toFixed(2))), 0);
};

export const calculateValue = ({ value, currency, exchangeRates }) => Number(Number(value)
* Number(exchangeRates[currency].ask)).toFixed(2);
