import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './App.css';
import Login from './components/Login';
import Ordering from './components/Ordering';
import Client from './components/Client';
import AddSupplier from './components/AddSupplier';
import ConfirmOrder from './components/ConfirmOrder';
import AddProduct from './components/AddProduct';
import ClientProvider from './contexts/ClientProvider';
import SupplierProvider from './contexts/SupplierProvider';
import SupplierDetails from './components/SupplierDetails';
import Stocktake from './components/Stocktake';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <ClientProvider>
          <SupplierProvider>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/client' element={<Client />} />
              <Route path='/stocktake' element={<Stocktake />} />
              <Route path='/order' element={<Ordering />} />
              <Route path='/order/confirm' element={<ConfirmOrder />} />
              <Route path='/supplier/add' element={<AddSupplier />} />
              <Route path='/supplier/details' element={<SupplierDetails />} />
              <Route path='/supplier/add/product' element={<AddProduct />} />
              <Route path='*' element={<h3>Adam sent you here, right?</h3>} />
            </Routes>
          </SupplierProvider>
        </ClientProvider>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
