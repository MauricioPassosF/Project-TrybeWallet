import React, { Component } from 'react';
import { connect } from 'react-redux';

class WalletForm extends Component {
  state = {
    valueInput: 0,
    descriptionInput: '',
    // currencyInput: 'BRL',
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { valueInput, descriptionInput } = this.state;
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
          Descricao:
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
          Selecione a raridade da carta
          <select
            type="select"
            data-testid="currency-input"
            name="currencyInput"
            id="currencyInput"
            // value={ currencyInput }
            onChange={ (e) => this.handleInput(e) }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(WalletForm);
