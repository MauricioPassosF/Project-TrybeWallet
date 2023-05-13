import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    return (
      <table>
        <thead>
          <tr>
            {tableHeader.map((info) => (
              <th key={ info }>{info}</th>
            ))}
          </tr>
        </thead>
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
