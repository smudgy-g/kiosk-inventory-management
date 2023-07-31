import React, { FormEvent } from 'react';
import { addSupplierToClient } from '../services/supplierService';
import { ClientContextType, newSupplier } from '../interfaces';
import { useState } from 'react';
import { useClient } from '../contexts/ClientProvider';
import { useNavigate } from 'react-router-dom';
import LogoComponent from './Logo';

export default function AddSupplier() {
  const [company, setCompany] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const { clientId } = useClient() as ClientContextType;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const supplier: newSupplier = {
      clientId: clientId,
      companyName: company,
      contactName: contact,
      email: email,
    };
    addSupplierToClient(supplier)
      .then(() => {
        navigate('/client');
      })
      .catch((error: Error) => {
        console.log(error);
        alert('Unable to add supplier. Please try again.');
      });

    //add message modal
  }

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <>
      <header className='text-left py-5 px-7 mb-2'>
        <LogoComponent />
        <h1 className='text-3xl font-bold'>Add Supplier</h1>
      </header>
      <main className='text-left'>
        <form onSubmit={handleSubmit} className='flex flex-col px-7 '>
          <label className='text-lg mb-2 mt-6'>Company Name:</label>
          <input
            name='companyName'
            placeholder='Company Name'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className='border border-solid border-slate-100 p-2 rounded-md'
          />
          <label className='text-lg mb-2 mt-6'>Contact Name:</label>
          <input
            name='contactName'
            placeholder='Contact Name'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className='border border-solid border-slate-100 p-2 rounded-md'
          />
          <label className='text-lg mb-2 mt-6'>Email:</label>
          <input
            name='email'
            placeholder='Email'
            value={email}
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            required
            className='border border-solid border-slate-100 p-2 rounded-md'
          />
          <button
            type='submit'
            className='bg-orange-600 rounded-lg mt-5 p-2 text-white font-bold'>
            Add Supplier
          </button>
        </form>
      </main>
      <footer className='mt-8'>
        <button
          onClick={handleGoBack}
          className='bg-black py-2 w-36 rounded-full font-bold text-white cursor-pointer'>
          Back
        </button>
      </footer>
    </>
  );
}
