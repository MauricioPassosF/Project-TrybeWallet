import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Teste no App', () => {
  it('A aplicacao direciona para as paginas corretas', () => {
    const initialEntries = ['/carteira'];
    renderWithRouterAndRedux(<App />, { initialEntries });
    screen.getByRole('heading', { name: /trybewallet/i, nivel: 2 });
  });
});
