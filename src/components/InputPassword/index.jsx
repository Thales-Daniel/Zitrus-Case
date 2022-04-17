import React from 'react';
import './style.css';

function InputPassword() {
  return (
    <label htmlFor="inputPassword" className="labelSenha">
      Digite Sua Senha
      <input className="inputPassword" placeholder="******" type="password" />
    </label>
  );
}

export default InputPassword;
