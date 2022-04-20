import React from 'react';
import CreateCustomerLink from '../createCustomerLink';
import './style.css';

// eslint-disable-next-line react/prop-types
function Header({ titulo }) {
  return (
    <header className="header">
      <h1 className="titulo">{titulo}</h1>
      <CreateCustomerLink />
    </header>
  );
}

export default Header;
