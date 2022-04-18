import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCustomer, updateState } from '../../redux/customerSlice';
import postUser from '../../api/postUser';

function Customers() {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers);

  const update = async () => {
    const teste = await postUser({ name: 'leo de novo', address: { street: 'rua pão de queijo', city: 'rua trem baum', country: 'brazil' } });
    dispatch(updateState(teste));
  };

  useEffect(() => {
    dispatch(getCustomer());
    console.log(customers);
  }, [dispatch]);

  return (
    <div>
      <button type="button" onClick={update}>clicklog</button>
    </div>
  );
}

export default Customers;
