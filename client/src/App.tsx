import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Ordering from './components/Ordering';
import Client from './components/Client';
import AddSupplier from './components/AddSupplier';
import { ClientContext, SupplierContext } from './app/store';
import ConfirmOrder from './components/ConfirmOrder';

// export const SupplierContext = createContext<ClientContextType | undefined>(
//   undefined
// );

function App() {
  const [clientId, setClientId] = useState<number>(0);
  const [supplierId, setSupplierId] = useState<number>(0);

  return (
    <ClientContext.Provider value={{ clientId, setClientId }}>
      <SupplierContext.Provider value={{ supplierId, setSupplierId }}>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/client/:id' element={<Client />} />
            <Route path='/products/' element={<Ordering />} />
            <Route path='/order' element={<ConfirmOrder />} />
            <Route path='/supplier/add' element={<AddSupplier />} />
            <Route path='*' element={<h3>Adam sent you here, didn't he.</h3>} />
          </Routes>
        </Router>
      </SupplierContext.Provider>
    </ClientContext.Provider>
  );
}

export default App;
