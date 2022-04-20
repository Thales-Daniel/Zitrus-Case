import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomersCard from '../../components/customerCard';
import Header from '../../components/header';
import { getCustomer } from '../../redux/customerSlice';
import './style.css';

function Customers() {
  const customers = useSelector((state) => state.customers.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomer());
  }, [dispatch]);

  return (
    <div>
      <Header titulo="Clientes" />
      <div className="containerCustomerList">
        {customers.map(({
          image, Rua, bairro, cidade, estado, name, id,
        }) => (
          <CustomersCard
            key={id}
            nome={name}
            logradouro={Rua}
            uf={estado}
            bairro={bairro}
            localidade={cidade}
            imagem={image}
          />
        ))}
      </div>
    </div>
  );
}

export default Customers;
