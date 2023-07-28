// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SupplierComponent from './SupplierComponent';
import { useAppSelector } from '../app/hooks';
import { getClientSuppliers } from '../services/supplierService';
// remove this and move to tailwind
import '../styles/client.css';
import { Supplier } from '../app/interfaces';

// interface Supplier {
//   clientId: Number;
//   companyName: String;
//   contactName: String;
//   email: String;
//   id: Number;
// }

//In component files, import the pre-typed hooks instead of the standard hooks from React Redux
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
          <div className='btn blue'>Stocktake</div>
          <div className='btn black'>Add Supplier</div>
        </div>
      </main>
    </>
  );
}
