// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { getCurrencies } from '../../helpers/fetchCurrencies';

console.log(getCurrencies());

const INITIAL_STATE = {
  currencies: getCurrencies(),
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default wallet;
