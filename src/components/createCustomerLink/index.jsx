import { Link } from 'react-router-dom';
import React from 'react';
import './style.css';

function CreateCustomerLink() {
  return (
    <Link className="createCustomer" to="/register">
      Criar cliente
    </Link>
  );
}

export default CreateCustomerLink;
