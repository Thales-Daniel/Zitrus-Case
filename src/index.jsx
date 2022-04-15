import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import Customer from './pages/customer';
import Register from './pages/register';
import Details from './pages/details';
import NotFound from './pages/notFound';
import './api/server';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/details" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
