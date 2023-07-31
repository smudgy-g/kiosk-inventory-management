import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Ordering from './components/Ordering';
import Client from './components/Client';
import AddSupplier from './components/AddSupplier';
import { ClientContext, SupplierContext } from './app/store';
import ConfirmOrder from './components/ConfirmOrder';
import AddProduct from './components/AddProduct';

function App() {
  const [clientId, setClientId] = useState<number>(0);
  const [supplierId, setSupplierId] = useState<number>(0);

  return (
    <ClientContext.Provider value={{ clientId, setClientId }}>
      <SupplierContext.Provider value={{ supplierId, setSupplierId }}>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/client' element={<Client />} />
            <Route path='/order' element={<Ordering />} />
            <Route path='/order/confirm' element={<ConfirmOrder />} />
            <Route path='/supplier/add' element={<AddSupplier />} />
            <Route path='/supplier/add/product' element={<AddProduct />} />
            <Route path='*' element={<h3>Adam sent you here, right?</h3>} />
          </Routes>
        </Router>
      </SupplierContext.Provider>
    </ClientContext.Provider>
  );
}

export default App;
