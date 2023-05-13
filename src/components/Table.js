import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { calculateValue } from '../helpers/calculateTotal';

class Table extends Component {
  state = {
    tableHeader: [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ],
  };

  render() {
    const { tableHeader } = this.state;
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {tableHeader.map((info) => (
              <th key={ info }>{info}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses
            .map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{Number(expense.value).toFixed(2)}</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
                <td>{calculateValue(expense)}</td>
                <td>BRL</td>
                <td>
                  <button>Adicionar</button>
                  <button>Excluir</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  dispatch: PropTypes.func,
  expenses: PropTypes.shape([]),
}.isRequired;

export default connect(mapStateToProps)(Table);
