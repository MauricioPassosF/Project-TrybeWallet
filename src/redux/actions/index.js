export const loginAction = (loginEmail) => ({
  type: 'GET_EMAIL',
  payload: loginEmail,
});

const receiveCurrencies = (currencies) => ({
  type: 'GET_CURRENCIES',
  payload: currencies,
});

const addExpense = (expenseWithFetch) => ({
  type: 'ADD_EXPENSE',
  payload: expenseWithFetch,
});

export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  payload: id,
});

export const editExpense = (id) => ({
  type: 'EDIT_EXPENSE',
  payload: id,
});

export const finishEdit = (expenses) => ({
  type: 'FINISH_EDIT',
  payload: expenses,
});

export function fetchCurrencies() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(receiveCurrencies(Object
      .keys(data).filter((e) => e !== 'USDT'))));
}

export function addExpenseInState(expenseInfo) {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      // .then((data) => data);
      .then((data) => {
        const expenseWithFetch = {
          ...expenseInfo,
          exchangeRates: data,
        };
        return dispatch(addExpense(expenseWithFetch));
      });
  };
}
