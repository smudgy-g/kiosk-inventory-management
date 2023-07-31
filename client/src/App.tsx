import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Ordering from './components/Ordering';
import Client from './components/Client';
import AddSupplier from './components/AddSupplier';
import ConfirmOrder from './components/ConfirmOrder';
import AddProduct from './components/AddProduct';
import ClientProvider from './contexts/ClientProvider';

function App() {
  
  return (
    <Router>
      <ClientProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/client' element={<Client />} />
          <Route path='/order' element={<Ordering />} />
          <Route path='/order/confirm' element={<ConfirmOrder />} />
          <Route path='/supplier/add' element={<AddSupplier />} />
          <Route path='/supplier/add/product' element={<AddProduct />} />
          <Route path='*' element={<h3>Adam sent you here, right?</h3>} />
        </Routes>
      </ClientProvider>
    </Router>
  );
}

export default App;
