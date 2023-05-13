import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './css/Header.css';
import { calculateTotal } from '../helpers/calculateTotal';

class Header extends Component {
  state = {
    currency: 'BRL',
  };

  render() {
    const { currency } = this.state;
    const { email, expenses } = this.props;
    return (
      <header>
        <div>
          <h2>TrybeWallet</h2>
        </div>
        <div>
          <span data-testid="email-field">{`E-mail: ${email}`}</span>
          <span>Despesa Total:$ </span>
          <span data-testid="total-field">{calculateTotal(expenses)}</span>
          <span data-testid="header-currency-field">{currency}</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = ({
  dispatch: PropTypes.func,
  email: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps)(Header);
