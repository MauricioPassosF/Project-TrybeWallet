import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, addExpenseInState } from '../redux/actions';

class WalletForm extends Component {
  state = {
    valueInput: '',
    descriptionInput: '',
    currencyInput: 'USD',
    methodInput: 'Dinheiro',
    methodOptions: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
    tagInput: 'Alimentação',
    tagOptions: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  addExpense = async () => {
    const { valueInput, descriptionInput, currencyInput,
      methodInput, tagInput } = this.state;
    const { expensesLength, dispatch } = this.props;
    const expenseInfo = {
      id: expensesLength,
      value: valueInput,
      description: descriptionInput,
      currency: currencyInput,
      method: methodInput,
      tag: tagInput,
    };
    await dispatch(addExpenseInState(expenseInfo));
    this.setState({
      valueInput: '',
      descriptionInput: '',
      currencyInput: 'USD',
      methodInput: 'Dinheiro',
      tagInput: 'Lazer',
    });
  };

  render() {
    const { valueInput, descriptionInput, currencyInput,
      methodOptions, methodInput, tagOptions, tagInput } = this.state;
    const { currencyOptions } = this.props;
    return (
      <form>
        <label htmlFor="valueInput">
          Valor:
          <input
            type="number"
            data-testid="value-input"
            name="valueInput"
            id="valueInput"
            value={ valueInput }
            onChange={ (e) => this.handleInput(e) }
          />
        </label>
        <label htmlFor="descriptionInput">
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            name="descriptionInput"
            id="descriptionInput"
            value={ descriptionInput }
            onChange={ (e) => this.handleInput(e) }
          />
        </label>
        <label htmlFor="currencyInput">
          Moeda:
          <select
            type="select"
            data-testid="currency-input"
            name="currencyInput"
            id="currencyInput"
            value={ currencyInput }
            onChange={ (e) => this.handleInput(e) }
          >
            {currencyOptions.map((currency) => (
              <option
                value={ currency }
                key={ currency }
              >
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="methodInput">
          Método de pagamento:
          <select
            type="select"
            data-testid="method-input"
            name="methodInput"
            id="methodInput"
            value={ methodInput }
            onChange={ (e) => this.handleInput(e) }
          >
            {methodOptions.map((method) => (
              <option
                value={ method }
                key={ method }
              >
                {method}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="tagInput">
          Categoria:
          <select
            type="select"
            data-testid="tag-input"
            name="tagInput"
            id="tagInput"
            value={ tagInput }
            onChange={ (e) => this.handleInput(e) }
          >
            {tagOptions.map((tag) => (
              <option
                value={ tag }
                key={ tag }
              >
                {tag}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          id="login-button"
          // disabled={ loginButtonDisable }
          onClick={ () => (this.addExpense()) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyOptions: state.wallet.currencies,
  expensesLength: state.wallet.expenses.length,
});

WalletForm.propTypes = ({
  dispatch: PropTypes.func,
  currencyOptions: PropTypes.shape([]),
}).isRequired;

export default connect(mapStateToProps)(WalletForm);
