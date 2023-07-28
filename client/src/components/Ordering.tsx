// import { useAppSelector } from "../app/hooks";
import { useEffect, useState } from 'react';
import { getSupplierProducts } from '../services/productService';
import { Product } from '../app/interfaces';
import { useLocation } from 'react-router-dom';
import { LocationState } from '../app/interfaces';

export default function OrderingComponent() {
  const location = useLocation();
  const id = (location.state as LocationState)?.id;
  const supplierName = (location.state as LocationState)?.name;

  const [products, setProducts] = useState<Product[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchSuppliers = async () => {
      if (id) {
        const res = await getSupplierProducts(id);
        console.log(res);
        setProducts(res);
        setLoaded(true);
      }
    };

    fetchSuppliers();
  }, [loaded]);

  return (
    <>
      <h1>{supplierName}</h1>
      <span>Create Order</span>
      <ul>
        {products.map((item) => (
          <li key={item.id.toString()}>
            <h2>{item.name}</h2> ${item.price}
          </li>
        ))}
      </ul>
    </>
  );
}
