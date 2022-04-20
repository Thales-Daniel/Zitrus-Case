import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">
          <span className="login-form-title"> Bem vindo </span>

          <div className="wrap-input">
            <input
              className={email !== '' ? 'has-val input' : 'input'}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Usuario" />
          </div>

          <div className="wrap-input">
            <input
              className={password !== '' ? 'has-val input' : 'input'}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Senha" />
          </div>

          <div className="container-login-form-btn">
            <Link className="login-form-btn" to="/customer">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
