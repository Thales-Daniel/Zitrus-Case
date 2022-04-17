import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCustomer } from '../../redux/customerSlice';

function Customers() {
  const dispatch = useDispatch();
  const customers = useSelector((state) => console.log(state));

  useEffect(() => {
    dispatch(getCustomer());
  }, [dispatch]);

  return (
    <div>
      teste
    </div>
  );
}

export default Customers;
