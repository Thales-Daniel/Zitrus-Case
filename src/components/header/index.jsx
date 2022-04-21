import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CreateCustomerLink from '../createCustomerLink';
import './style.css';

function Header({ titulo }) {
  return (
    <header className="header">
      <h1 className="titulo">{titulo}</h1>
      <div>
        <Link className="headerButton" to="/">Sair</Link>
        <CreateCustomerLink />

      </div>
    </header>
  );
}

Header.propTypes = {
  titulo: PropTypes.string,
}.isRequired;

export default Header;
