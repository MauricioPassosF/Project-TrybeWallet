export const loginAction = (loginEmail) => ({
  type: 'GET_EMAIL',
  payload: loginEmail,
});

const receiveCurrencies = (currencies) => ({
  type: 'GET_CURRENCIES',
  payload: currencies,
});

export function fetchCurrencies() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(receiveCurrencies(Object
      .keys(data).filter((e) => e !== 'USDT'))));
}
