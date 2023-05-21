import React from 'react';
import { screen } from '@testing-library/react';
import Wallet from '../pages/Wallet';
import { twoExpenses } from './helpers/testStates';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Teste no componente Header', () => {
  it('Ao entrar na pagina ela apresenta as informacoes corretas', () => {
    const initialState = { user: { email: 'email@teste.com' } };
    renderWithRouterAndRedux(<Wallet />, { initialState });
    const emailText = screen.getByTestId('email-field').textContent;
    expect(emailText).toBe('E-mail: email@teste.com');
    const currencyText = screen.getByTestId('header-currency-field').textContent;
    expect(currencyText).toBe('BRL');
  });

  it('Testa se apresenta valor correto para o estado', () => {
    const initialState = twoExpenses;
    renderWithRouterAndRedux(<Wallet />, { initialState });
    const totalValueText = screen.getByTestId('total-field').textContent;
    expect(totalValueText).toBe('26.22');
  });
});
