import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Product from './components/Product';
import Client from './components/Client';
import AddSupplier from './components/AddSupplier';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/client' element={<Client />} />
        <Route path='/supplier/{:id}' element={<Product />} />
        <Route path='/supplier/add' element={<AddSupplier />} />
      </Routes>
    </Router>
  );
}

export default App;
