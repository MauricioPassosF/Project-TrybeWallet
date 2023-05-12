import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginAction } from '../redux/actions';
import './css/Login.css';
import { emailValidation, passwordValidation } from '../helpers/inputsValidation';

class Login extends Component {
  state = {
    emailInput: '',
    passwordInput: '',
    loginButtonDisable: true,
  };

  buttonValidation = () => {
    const { emailInput, passwordInput } = this.state;
    this.setState({
      loginButtonDisable:
      !(passwordValidation(passwordInput) && emailValidation(emailInput)),
    });
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => (this.buttonValidation()));
  };

  render() {
    const { loginButtonDisable, emailInput, passwordInput } = this.state;
    const { dispatch } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="emailInput">
            E-mail:
            <input
              type="text"
              data-testid="email-input"
              name="emailInput"
              id="emailInput"
              placeholder="Digite e-mail válido"
              value={ emailInput }
              onChange={ (e) => this.handleInput(e) }
            />
          </label>
          <label htmlFor="passwordInput">
            Senha:
            <input
              type="text"
              data-testid="password-input"
              name="passwordInput"
              id="passwordInput"
              placeholder="Digite sua senha"
              value={ passwordInput }
              onChange={ (e) => this.handleInput(e) }
            />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              id="login-button"
              disabled={ loginButtonDisable }
              onClick={ () => (dispatch(loginAction(emailInput))) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
const mapStateToProps = () => ({});

Login.propTypes = ({
  dispatch: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps)(Login);
