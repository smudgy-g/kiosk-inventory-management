import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Product from './components/Product';
import Client from './components/Client';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/client' element={<Client />} />
        <Route path='/supplier/{:id}' element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
