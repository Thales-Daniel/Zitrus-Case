import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function Register() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [cep, setCep] = useState('');
  const [cepInvalido, setCepInvalido] = useState(false);
  const [logradouro, setLogradouro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [bairro, setBairro] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [address, setAddres] = useState({});

  async function searchAddress() {
    try {
      const url = `https://opencep.com/v1/${cep}`;
      const { data } = await axios(url);
      setLogradouro(data.logradouro);
      setCidade(data.localidade);
      setEstado(data.uf);
      setBairro(data.bairro);
      setAddres(data);
    } catch (err) {
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
              <br />
              {cepInvalido && <small className="cepInvalido">Cep Inválido</small>}
            </div>
          </label>
          <label htmlFor="logradouro" className="labelCep">
            <p className="addressTittle">Logradouro</p>
            <input id="logradouro" className="inputLogradouro" maxLength="8" type="text" value={logradouro} onChange={(e) => setLogradouro(e.target.value)} />
            <p className="addressTittle">Bairro</p>
            <input id="cidade" className="inputUf" maxLength="8" type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} />
          </label>
          <label htmlFor="cidade" className="labelEstado">
            <div>
              <p className="addressTittle">Cidade</p>
              <input id="cidade" className="inputUf" maxLength="8" type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
            </div>
            <div>
              <p id="estado" className="addressTittle">Estado</p>
              <input id="estado" className="inputUf" maxLength="8" type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
            </div>
          </label>
          <button type="submit" className="createUserButton">Criar Usuário</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
