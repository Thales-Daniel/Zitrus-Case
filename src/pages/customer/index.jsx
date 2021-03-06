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
      <Header titulo="Clientes" funcao="Criar Cliente" pathName="/register" />
      <div className="containerCustomerList">
        {customers.map(({
          image, Rua, bairro, cidade, estado, name, id, email, cep,
        }) => (
          <CustomersCard
            id={id}
            key={id}
            nome={name}
            logradouro={Rua}
            uf={estado}
            bairro={bairro}
            localidade={cidade}
            imagem={image}
            email={email}
            cep={cep}
          />
        ))}

      </div>
    </div>
  );
}

export default Customers;
