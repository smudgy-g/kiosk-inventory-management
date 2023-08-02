import React, { FormEvent } from 'react';
import { addSupplierToClient } from '../services/supplier.service';
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
    navigate(-'/client');
  }

  return (
    <>
      <header className='text-left py-5 px-7 mb-2'>
        <LogoComponent />
        <h2 className='mt-6 text-3xl font-bold'>Add Supplier</h2>
      </header>
      <main className='mt-1 text-left'>
        <form onSubmit={handleSubmit} className='flex flex-col px-7 '>
          <label className='text-lg mb-2 mt-6 font-bold'>Company Name:</label>
          <input
            name='companyName'
            placeholder='Company Name'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className='border border-solid border-slate-100 p-2 rounded-md'
          />
          <label className='text-lg mb-2 mt-4 font-bold'>Contact Name:</label>
          <input
            name='contactName'
            placeholder='Contact Name'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className='border border-solid border-slate-100 p-2 rounded-md'
          />
          <label className='text-lg mb-2 mt-4 font-bold'>Email:</label>
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
            className='bg-secondary rounded-lg mt-8 p-2 text-white font-bold'>
            Add Supplier
          </button>
        </form>
      </main>
      <footer className='mt-8'>
        <button
          onClick={handleGoBack}
          className='bg-primary py-2 w-36 rounded-full font-bold text-dark cursor-pointer'>
          Back
        </button>
      </footer>
    </>
  );
}
