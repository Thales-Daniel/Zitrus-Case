import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen, render } from './test.utils';
import Login from '../pages/login';

describe('verificando pagina de login', () => {
  it('Verificando se os os botões estão presentes na tela', () => {
    render(<Login />);
    const usuario = screen.getByTestId('usuario');
    const senha = screen.getByTestId('senha');
    const loginBtn = screen.getByTestId('login');
    expect(usuario).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });

  it('Inserindo um usuario invalido', () => {
    render(<Login />);
    const usuario = screen.getByTestId('usuario');
    const senha = screen.getByTestId('senha');
    const loginBtn = screen.getByTestId('login');

    userEvent.type(usuario, 'usuarioInvalido');
    userEvent.type(senha, 'senhaInvalida');
    userEvent.click(loginBtn);
    // const small = screen.getByTestId('small');

    // expect(small).toBeInTheDocument();
  });
});
