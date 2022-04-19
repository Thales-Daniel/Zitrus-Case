import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function Register() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [cep, setCep] = useState('');
  const [cepInvalido, setCepInvalido] = useState(false);
  const [address, setAddress] = useState({});

  async function searchAddress() {
    try {
      const url = `https://opencep.com/v1/${cep}`;
      const search = await axios(url);
      setAddress(search.data);
    } catch (err) {
      setAddress({});
      setCepInvalido(true);
      setTimeout(() => setCepInvalido(false), 2000);
    }
  }

  return (
    <div className="container-register">
      <div className="wrap-register">
        <form className="register-form">
          <h2 className="register-form-title">Cadastre-se</h2>
          <label htmlFor="usuario" className="labelRegister">
            <p className="registerFildTitle">Usuário</p>
            <input id="usuario" className="inputRegister" type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
          </label>
          <label htmlFor="senha" className="labelRegister">
            <p className="registerFildTitle">Senha</p>
            <input id="senha" className="inputRegister" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label htmlFor="cep" className="labelCep">
            <div>
              <p className="addressTittle">Cep</p>
              <input id="cep" className="inputAddress" maxLength="8" type="text" value={cep} onChange={(e) => setCep(e.target.value)} placeholder="00000000" />
              <button type="button" className="buttonCep" onClick={searchAddress}>Verificar</button>
            </div>
          </label>
          {cepInvalido && <small className="cepInvalido">Cep Inválido</small>}
          <label htmlFor="cep" className="labelCep">
            <p className="addressTittle">Logradouro</p>
            <input id="cep" className="inputAddress" maxLength="8" type="text" value={address.logradouro} />

          </label>
          <label htmlFor="estado" className="labelEstado">
            <div>
              <p className="addressTittle">Cidade</p>
              <input id="cep" className="inputState" maxLength="8" type="text" value={address.localidade} />
            </div>
            <div>
              <p id="estado" className="addressTittle">Estado</p>
              <input id="cep" className="inputState" maxLength="8" type="text" value={address.uf} />
            </div>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Register;
