// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SupplierComponent from './SupplierComponent';
import { useAppSelector } from '../app/hooks';
import { getClientSuppliers } from '../services/supplierService';
// remove this and move to tailwind
import '../styles/client.css';
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
      <header>
        <h1 className=''>Shenanigans</h1>
      </header>
      <main>
        <div className='supplier-list-container'>
          {suppliers.map((supplier) => (
            <SupplierComponent
              key={supplier.id.toString()}
              name={supplier.companyName}
              id={supplier.id}
            />
          ))}
        </div>
        <div className='flex-row margin-30-top'>
          <button>Stocktake</button>
          <button>Add Supplier</button>
        </div>
      </main>
    </>
  );
}
