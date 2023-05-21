import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Teste da pagina Login', () => {
  const testIdEmail = 'email-input';
  const testIdPassword = 'password-input';
  const emailTest = 'teste@teste.com';
  it('A pagina possui 2 inputs e 1 botao', () => {
    renderWithRouterAndRedux(<Login />);
    screen.getByTestId(testIdEmail, { name: 'E-mail:' });
    screen.getByTestId(testIdPassword, { name: /senha:/i });
    screen.getByRole('button', { name: /entrar/i });
  });

  it('Testa se a digitacao nos inputs funcionam', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByTestId(testIdEmail, { name: 'E-mail:' });
    userEvent.type(inputEmail, emailTest);
    expect(inputEmail.value).toEqual(emailTest);
    const inputPassword = screen.getByTestId(testIdPassword, { name: /senha:/i });
    userEvent.type(inputPassword, 'testeteste');
    expect(inputPassword.value).toEqual('testeteste');
  });

  it('Ao entrar na pagina o botao esta desabilitado', () => {
    renderWithRouterAndRedux(<Login />);
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeDisabled();
  });

  it('Testa a validacao do botao quanto ao email', () => {
    renderWithRouterAndRedux(<Login />);
    const inputPassword = screen.getByTestId(testIdPassword, { name: /senha:/i });
    const button = screen.getByRole('button', { name: /entrar/i });
    const inputEmail = screen.getByTestId(testIdEmail, { name: 'E-mail:' });
    userEvent.type(inputPassword, 'testeteste');
    userEvent.type(inputEmail, 'testeteste.com');
    expect(button).toBeDisabled();
    inputEmail.value = '';
    userEvent.type(inputEmail, 'teste@teste');
    expect(button).toBeDisabled();
    inputEmail.value = '';
    userEvent.type(inputEmail, emailTest);
    expect(inputEmail.value).toEqual(emailTest);
    expect(button).not.toBeDisabled();
  });

  it('Testa a validacao do botao quanto a senha', () => {
    renderWithRouterAndRedux(<Login />);
    const inputPassword = screen.getByTestId(testIdPassword, { name: /senha:/i });
    const button = screen.getByRole('button', { name: /entrar/i });
    const inputEmail = screen.getByTestId(testIdEmail, { name: 'E-mail:' });
    userEvent.type(inputEmail, emailTest);
    userEvent.type(inputPassword, 'teste');
    expect(button).toBeDisabled();
    inputPassword.value = '';
    userEvent.type(inputPassword, 'testeteste');
    expect(button).not.toBeDisabled();
  });

  it('Testa se ao clicar no botar o usuario eh direcionado para a pagina Wallet', () => {
    const { history, store } = renderWithRouterAndRedux(<Login />);
    const inputPassword = screen.getByTestId(testIdPassword, { name: /senha:/i });
    const button = screen.getByRole('button', { name: /entrar/i });
    const inputEmail = screen.getByTestId(testIdEmail, { name: 'E-mail:' });
    userEvent.type(inputPassword, 'testeteste');
    userEvent.type(inputEmail, emailTest);
    expect(store.getState().user.email).toBe('');
    userEvent.click(button);
    expect(history.location.pathname).toBe('/carteira');
    expect(store.getState().user.email).toBe(emailTest);
  });
});
