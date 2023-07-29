// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SupplierComponent from './SupplierComponent';
import { useClientContext } from '../app/store';
import { getClientSuppliers } from '../services/supplierService';
import { getClientDetails } from '../services/clientService';

import { Supplier } from '../app/interfaces';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import ClientHeaderComponent from './ClientHeaderComponent';

export default function Client() {
  const { clientId } = useClientContext();
  const [clientName, setClientName] = useState<string>('');
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchClient = async () => {
      const res = await getClientDetails(clientId);
      setClientName(res.companyName);
    };

    const fetchSuppliers = async () => {
      const res = await getClientSuppliers(clientId);
      setSuppliers(res);
      setLoaded(true);
    };
    fetchClient();
    fetchSuppliers();
  }, [clientId, loaded]);

  const navigate = useNavigate();

  function handleClick() {
    navigate('/supplier/add');
  }

  return (
    <>
      <div>
        <ClientHeaderComponent />
      </div>
      <main className='text-left px-5 overflow-auto mb-16 mt-24'>
        {!loaded && <Spinner />}
        <h1 className='text-3xl font-bold'>{clientName}</h1>
        <div className=''>
          {suppliers.map((supplier) => (
            <SupplierComponent
              key={supplier.id.toString()}
              name={supplier.companyName}
              id={supplier.id}
            />
          ))}
        </div>
      </main>
      <footer className='fixed bottom-0 left-0 flex justify-between bg-white w-full py-4 px-5'>
        <button className='bg-blue-700 py-2 w-36 rounded-full font-bold text-white cursor-pointer'>
          Stocktake
        </button>
        <button
          onClick={handleClick}
          className='bg-green-700 text-white font-bold py-2 w-36 rounded-full cursor-pointer'>
          Add Supplier
        </button>
      </footer>
    </>
  );
}
