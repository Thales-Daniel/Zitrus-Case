import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Customer from './pages/customer';
import Register from './pages/register';
import Details from './pages/details';
import NotFound from './pages/notFound';
import './app.css';
import './api/server';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
