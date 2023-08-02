import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSupplier } from '../contexts/SupplierProvider';
import { SupplierContextType } from '../interfaces';
import { getSupplierDetails } from '../services/supplier.service';
import ClientHeaderComponent from './ClientHeaderComponent';
import LogoComponent from './Logo';

interface SupplierDetails {
  name: string;
  contact: string;
  email: string;
}

export default function SupplierDetails() {
  const navigate = useNavigate();
  const { supplierId } = useSupplier() as SupplierContextType;
  const [details, setDetails] = useState<SupplierDetails>();

  // api call to get suplier deets
  useEffect(() => {
    const fetchDetails = async () => {
      const { companyName, contactName, email } = await getSupplierDetails(
        supplierId
      );
      setDetails({ name: companyName, contact: contactName, email: email });
    };
    fetchDetails();
  }, []);

  return (
    <>
      <div className='py-5 px-7 mb-2'>
        <LogoComponent />
      </div>
      <main className='px-7 mt-12'>
        <div className=''>
          <h3 className='text-3xl font-bold font-DMSerif'>{details?.name}</h3>
        </div>
        <div className='mt-5 mb-7'>
          <p className='text-lg'>Contact:</p>
          <p className='mt-1 text-2xl font-bold'>{details?.contact}</p>
        </div>
        <a href='mailto:${details?.email}' className='text-xl'>
          {details?.email}
        </a>
      </main>
      <footer className='fixed bottom-0 left-0 right-0 py-5'>
        <button
          onClick={() => navigate(-1)}
          className='bg-accent py-2 w-36 rounded-full font-bold text-dark cursor-pointer'>
          Back
        </button>
      </footer>
    </>
  );
}
