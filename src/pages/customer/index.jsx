import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

function Customers() {
  const [clients, setClients] = useState([]);

  const fetchApi = useCallback(async () => {
    try {
      const fetch = await axios.get('api/customers');
      const { data: { customers } } = fetch;
      setClients(customers);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      {clients.map((customer) => <p>{customer.name}</p>)}
    </div>
  );
}

export default Customers;
