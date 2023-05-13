export const calculateTotal = (expenses) => expenses
  .reduce(((add, { value, currency, exchangeRates }) => add
      + Number((Number(value) * Number(exchangeRates[currency].ask)).toFixed(2))), 0);

export const calculateValue = ({ value, currency, exchangeRates }) => (Number(value)
* Number(exchangeRates[currency].ask)).toFixed(2);
