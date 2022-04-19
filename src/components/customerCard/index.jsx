import React from 'react';
import notFoundUser from '../../assets/unknown.png';
import './style.css';

function CustomersCard({
  // eslint-disable-next-line react/prop-types
  imagem, nome, logradouro, localidade, uf, bairro,
}) {
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
          <button type="button" className="cardButton">Editar</button>
          <button className="cardButton" type="button">excluir</button>
        </div>
      </div>
    </div>
  );
}

export default CustomersCard;
