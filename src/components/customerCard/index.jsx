import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import notFoundUser from '../../assets/unknown.png';
import { deleteCustomer, getCustomerById } from '../../redux/customerSlice';
import './style.css';

function CustomersCard({
  // eslint-disable-next-line react/prop-types
  imagem, nome, logradouro, localidade, uf, bairro, id,
}) {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const customerDelete = (usuarioId) => {
    dispatch(deleteCustomer(usuarioId));
  };

  const editCostumer = (userId) => {
    dispatch(getCustomerById(userId));
    setRedirect(true);
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
        <p className="address">
          Bairro:
          {' '}
          {bairro || ''}
        </p>
        <p className="address">
          Cidade:
          {' '}
          {localidade || ''}
        </p>
        <p className="address">
          Estado:
          {' '}
          {uf || ''}
        </p>
        <div className="cardButtons">
          <Link to="/details">
            <button type="button" className="cardButton" onClick={() => editCostumer(id)}>Editar</button>
          </Link>
          <button className="cardButton" type="button" onClick={() => customerDelete(id)}>excluir</button>
        </div>
      </div>
    </div>
  );
}

export default CustomersCard;
