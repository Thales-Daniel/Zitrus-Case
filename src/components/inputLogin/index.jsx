import React from 'react';
import './style.css';

function InputEmail() {
  return (
    <label htmlFor="inputEmail" className="labelEmail">
      Digite seu E-mail
      <input className="inputEmail" placeholder="E-mail" type="email" />
    </label>
  );
}

export default InputEmail;
