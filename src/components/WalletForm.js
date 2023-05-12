import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../redux/actions';

class WalletForm extends Component {
  state = {
    valueInput: 0,
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
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyOptions: state.wallet.currencies,
});

WalletForm.propTypes = ({
  dispatch: PropTypes.func,
  currencyOptions: PropTypes.shape([]),
}).isRequired;

export default connect(mapStateToProps)(WalletForm);
