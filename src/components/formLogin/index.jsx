import React from 'react';
import InputEmail from '../inputLogin';
import InputPassword from '../InputPassword';
import './style.css';

function FormLogin() {
  return (
    <form className="formLogin">
      <InputEmail />
      <InputPassword />
      <button type="submit" className="submitButton">Login</button>
    </form>
  );
}

export default FormLogin;
