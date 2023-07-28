import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Ordering from './components/Ordering';
import Client from './components/Client';
import AddSupplier from './components/AddSupplier';
import { ClientContextType } from './app/interfaces';

export const ClientContext = createContext<ClientContextType | undefined>(
  undefined
);
export const SupplierContext = createContext<ClientContextType | undefined>(
  undefined
);


function App() {
  const [clientId, setClientId] = useState<Number>(0);
  // const [supplierId, setSupplierId] = useState<Number>(0);

  return (
    <ClientContext.Provider
      value={({ clientId, setClientId })}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/client' element={<Client />} />
          <Route path='/products/' element={<Ordering />} />
          <Route path='/supplier/add' element={<AddSupplier />} />
          <Route path='*' element={<h3>Adam sent you here, didn't he.</h3>} />
        </Routes>
      </Router>
    </ClientContext.Provider>
  );
}

export default App;
