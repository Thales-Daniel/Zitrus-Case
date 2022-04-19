import React from 'react';
import { Link } from 'react-router-dom';
import notFoundUser from '../../assets/unknown.png';
import './style.css';

// eslint-disable-next-line react/prop-types
function CustomersCard({ imagem, nome }) {
  return (
    <div className="ContainerCard">
      <img src={imagem || notFoundUser} className="cardImage" alt="cardImage" />
      <p>{nome || 'Usuario'}</p>
      <div className="cardButtons">
        <Link className="cardButton" to="/details">Editar</Link>
        <button className="cardButton" type="button">excluir</button>
      </div>
    </div>
  );
}

export default CustomersCard;
