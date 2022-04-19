import React from 'react';
import CustomersCard from '../../components/customerCard';
import Header from '../../components/header';
import './style.css';

function Customers() {
  return (
    <div>
      <Header titulo="Clientes" />
      <div className="customerContainer">
        <CustomersCard />
      </div>

    </div>
  );
}

export default Customers;
