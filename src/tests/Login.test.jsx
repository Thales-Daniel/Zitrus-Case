import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from './test.utils';
import Login from '../pages/login';

describe('verificando pagina de login', () => {
  test('procurando', () => {
    render(<Login />);
    const bemvindo = screen.getByText('Bem vindo');
    expect(bemvindo).toBeInTheDocument();
  });
});
