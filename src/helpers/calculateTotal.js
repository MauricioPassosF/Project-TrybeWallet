export const calculateTotal = (expenses) => expenses
  .reduce(((add, { value, currency, exchangeRates }) => add
      + Number((Number(value) * Number(exchangeRates[currency].ask)).toFixed(2))), 0);
