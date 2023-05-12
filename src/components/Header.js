import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './css/Header.css';

class Header extends Component {
  state = {
    total: 0,
    currency: 'BRL',
  };

  render() {
    const { total, currency } = this.state;
    const { email } = this.props;
    return (
      <header>
        <div>
          <h2>TrybeWallet</h2>
        </div>
        <div>
          <span data-testid="email-field">{`E-mail: ${email}`}</span>
          <span data-testid="total-field">{`Despesa Total:$ ${total}`}</span>
          <span data-testid="header-currency-field">{currency}</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = ({
  dispatch: PropTypes.func,
  email: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps)(Header);
