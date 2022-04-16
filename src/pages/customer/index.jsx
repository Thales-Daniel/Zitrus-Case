import React from 'react';
import { useSelector } from 'react-redux';

function Customers() {
  const customers = useSelector((state) => state.customers.data);

  return (
    <div>
      {customers.map((item) => <p key={item}>{item}</p>)}
    </div>
  );
}

export default Customers;
