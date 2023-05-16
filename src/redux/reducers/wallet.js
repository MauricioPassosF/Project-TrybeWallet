// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_CURRENCIES':
    return { ...state, currencies: action.payload };
  case 'ADD_EXPENSE':
    return { ...state,
      expenses: [...state.expenses, action.payload] };
  case 'REMOVE_EXPENSE':
    return { ...state,
      expenses: state.expenses
        .filter((expense, index) => index !== action.payload) };
  case 'EDIT_EXPENSE':
    return { ...state,
      editor: true,
      idToEdit: action.payload };
  case 'FINISH_EDIT':
    return { ...state,
      editor: false,
      idToEdit: 0,
      expenses: action.payload };
  default:
    return state;
  }
};

export default wallet;
