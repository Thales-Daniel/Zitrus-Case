import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import { putCustomer } from '../../redux/customerSlice';
import BotaoVoltar from '../../components/botaoVoltar';

function Details() {
  const lastUser = useSelector((state) => state.customers.lastUser);

  const [usuario, setUsuario] = useState(lastUser.name);
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [cepInvalido, setCepInvalido] = useState(false);
  const [logradouro, setLogradouro] = useState(lastUser.Rua);
  const [cidade, setCidade] = useState(lastUser.cidade);
  const [estado, setEstado] = useState(lastUser.estado);
  const [bairro, setBairro] = useState(lastUser.bairro);
  const [returnPage, setReturnPage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!returnPage) {
      return undefined;
    }
    return navigate('/customer');
  }, [returnPage, lastUser]);

  async function searchAddress() {
    try {
      const url = `https://opencep.com/v1/${cep}`;
      const { data } = await axios(url);
      setLogradouro(data.logradouro);
      setCidade(data.localidade);
      setEstado(data.uf);
      setBairro(data.bairro);
    } catch (err) {
      setCepInvalido(true);
      setCep('');
      setTimeout(() => setCepInvalido(false), 2000);
    }
  }

  const updateUser = (event) => {
    event.preventDefault();
    const user = {
      name: usuario,
      image: '',
      Rua: logradouro,
      cidade,
      estado,
      bairro,
      id: lastUser.id,
    };

    dispatch(putCustomer(user));
  };

  const backToCostumer = () => {
    setReturnPage(true);
  };

  const verifyFields = usuario && email && cep && logradouro && cidade && estado && bairro;

  return (
    <div className="container-register">
      <div className="wrap-register">
        <form className="register-form" onSubmit={updateUser}>
          <h2 className="register-form-title">Editar Cliente</h2>
          <label htmlFor="usuario" className="labelRegister">
            <p className="registerFildTitle">Usuário</p>
            <input id="usuario" className="inputRegister" type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
          </label>
          <label htmlFor="senha" className="labelRegister">
            <p className="registerFildTitle">E-mail</p>
            <input id="senha" className="inputRegister" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
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
          <button type="submit" className="createUserButton" disabled={!verifyFields} onClick={backToCostumer}>Editar Cliente</button>
          <BotaoVoltar />
        </form>
      </div>
    </div>
  );
}

export default Details;
