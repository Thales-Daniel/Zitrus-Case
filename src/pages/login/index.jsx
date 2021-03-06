import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/usersSlice';
import './style.css';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [small, setSmall] = useState(false);
  const [logged, setLogged] = useState(false);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (!logged) {
      return undefined;
    }
    return navigate('/customer');
  }, [logged]);

  const verifyLogin = () => {
    const userField = { usuario, senha };
    const findUser = users
      .filter((user) => user.usuario === userField.usuario && user.senha === userField.senha);

    if (findUser.length === 1) setLogged(true);

    setTimeout(() => setSmall(true), 200);
    setTimeout(() => setSmall(false), 2000);
  };

  return (
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">
          <span className="login-form-title"> Bem vindo </span>

          <div className="wrap-input">
            <input
              className={usuario !== '' ? 'has-val input' : 'input'}
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              data-testid="usuario"
            />
            <span className="focus-input" data-placeholder="Usuario" />
          </div>

          <div className="wrap-input">
            <input
              className={senha !== '' ? 'has-val input' : 'input'}
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              data-testid="senha"
            />
            <span className="focus-input" data-placeholder="Senha" />
          </div>

          <div className="container-login-form-btn">

            <button
              className="login-form-btn"
              type="button"
              onClick={verifyLogin}
              data-testid="login"
            >
              Login

            </button>

            {small && <small data-testid="small" className="cepInvalido">Login ou senha Inv??lidos</small>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
