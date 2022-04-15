import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [inputValue, setInputValue] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    const post = axios.create('api/customers', { inputValue });
    console.log(post);
    setInputValue('');
  };

  return (
    <form onSubmit={handleRegister}>
      <p>teste</p>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit">register</button>
    </form>
  );
}

export default Register;
