import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const user = { usuario: 'zitirino', senha: 'zitrus' };

  return (
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">
          <span className="login-form-title"> Bem vindo </span>

          <div className="wrap-input">
            <input
              className={usuario !== '' ? 'has-val input' : 'input'}
              type="email"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Usuario" />
          </div>

          <div className="wrap-input">
            <input
              className={senha !== '' ? 'has-val input' : 'input'}
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Senha" />
          </div>

          <div className="container-login-form-btn">
            <Link className="login-form-btn" to="/customer">
              <button
                className="login-form-btn"
                type="button"
                disabled={!(usuario === user.usuario && senha === user.senha)}
              >
                Login

              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
