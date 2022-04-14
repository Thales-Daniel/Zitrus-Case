import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import Costumer from './pages/costumer';
import Register from './pages/register';
import Details from './pages/details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/costumer" element={<Costumer />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </BrowserRouter>,
);
