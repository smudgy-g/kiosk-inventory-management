import { addSupplierToClient } from '../services/supplierService';
import { newSupplier } from '../app/interfaces';
import { useState } from 'react';
import { useAppSelector } from '../app/hooks';

export default function AddSupplier() {
  const [company, setCompany] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  const clientID = useAppSelector((state) => state.client.id);

  function handleSubmit(e: any) {
    e.preventDefault();
    const supplier: newSupplier = {
      clientId: clientID,
      companyName: company,
      contactName: contact,
      email: email,
    };
    addSupplierToClient(supplier);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='companyName'
          placeholder='Company Name'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <input
          name='contactName'
          placeholder='Contact Name'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <input
          name='email'
          placeholder='Email'
          value={email}
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type='submit'>Add Supplier</button>
      </form>
    </div>
  );
}
