// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SupplierComponent from './SupplierComponent';
import { useAppSelector } from '../app/hooks';
import { getClientSuppliers } from '../services/supplierService';
import { Supplier } from '../app/interfaces';

export default function Client() {
  const clientId = useAppSelector((state) => state.client.id);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchSuppliers = async () => {
      const res = await getClientSuppliers(clientId);
      setSuppliers(res);
      setLoaded(true);
    };

    fetchSuppliers();
  }, [clientId, loaded]);

  return (
    <>
      <header className='flex justify-between py-5 px-7 mb-2'>
        <div className='flex gap-2 items-center'>
          <img src='./images/orange.png' alt='orange logo' className='h-10' />
          <h1 className='text-2xl font-bold'>kiosk</h1>
        </div>
        <button className='bg-black py-2 px-6 rounded-full text-white cursor-pointer'>
          Logout
        </button>
      </header>
      <main className='text-left px-5'>
        <h1 className='text-3xl font-bold'>Shenanigans</h1>
        <div className=''>
          {suppliers.map((supplier) => (
            <SupplierComponent
              key={supplier.id.toString()}
              name={supplier.companyName}
              id={supplier.id}
            />
          ))}
        </div>
        <footer className='flex justify-between fixed bottom-0 left-0 w-full py-4 px-5'>
          <button className='bg-blue-700 py-2 w-36 rounded-full font-bold text-white cursor-pointer'>
            Stocktake
          </button>
          <button className='bg-green-700 text-white font-bold py-2 w-36 rounded-full cursor-pointer'>
            Add Supplier
          </button>
        </footer>
      </main>
    </>
  );
}
