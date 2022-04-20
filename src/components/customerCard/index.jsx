import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import notFoundUser from '../../assets/unknown.png';
import { deleteCustomer, getCustomerById } from '../../redux/customerSlice';
import './style.css';

function CustomersCard({
  imagem, nome, logradouro, localidade, uf, bairro, id,
}) {
  const dispatch = useDispatch();
  const customerDelete = (usuarioId) => {
    dispatch(deleteCustomer(usuarioId));
  };

  const editCostumer = (userId) => {
    dispatch(getCustomerById(userId));
  };

  return (
    <div className="ContainerCard">
      <img src={imagem || notFoundUser} className="cardImage" alt="cardImage" />
      <p className="nome">{nome || 'Usuario'}</p>
      <div className="containerAddressCard">
        <p className="address">
          Rua:
          {' '}
          {logradouro || ''}
        </p>
        <p className="endereco">
          Bairro:
          {' '}
          {bairro || ''}
        </p>
        <p className="endereco">
          Cidade:
          {' '}
          {localidade || ''}
        </p>
        <p className="endereco">
          Estado:
          {' '}
          {uf || ''}
        </p>
        <div className="cardButtons">
          <Link to="/details">
            <button type="button" className="cardButton" onClick={() => editCostumer(id)}>Editar</button>
          </Link>
          <button className="cardButton" type="button" onClick={() => customerDelete(id)}>Excluir</button>
        </div>
      </div>
    </div>
  );
}

CustomersCard.propTypes = {
  imagem: PropTypes.string,
  nome: PropTypes.string,
  logradouro: PropTypes.string,
  localidade: PropTypes.string,
  uf: PropTypes.string,
  bairro: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default CustomersCard;
