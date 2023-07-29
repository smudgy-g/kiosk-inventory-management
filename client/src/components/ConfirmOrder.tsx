import { useEffect, useState } from 'react';
import { ProductToOrder } from '../app/interfaces';
import { useSupplierContext, useClientContext } from '../app/store';
import Spinner from './Spinner';
import { useLocation } from 'react-router-dom';

//props: { products: ProductToOrder[] }
export default function ConfirmOrder() {
  const { supplierId } = useSupplierContext();
  const { clientId } = useClientContext();
  const [orderAmount, setOrderAmount] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  const productsToOrder: ProductToOrder[] =
    location.state?.productsToOrder || [];
  const supplierName = location.state?.supplierName || '';

  useEffect(() => {
    const total = totalOrderAmount(productsToOrder);
    setOrderAmount(total);
    setLoaded(true);
    console.log(supplierName, supplierId, clientId);
  }, []);

  function totalOrderAmount(arr: ProductToOrder[]) {
    return arr.reduce((acc, { quantity, price }) => {
      const subTotal = quantity * price;
      acc = acc + subTotal;
      return acc;
    }, 0);
  }

  return (
    <div>
      <header className='flex py-5 px-7 mb-2'>
        <img src='/images/orange.png' alt='orange logo' className='h-10 ' />
        <div className='grow'>
          <h1 className='text-3xl font-bold mb-2'>{supplierName}</h1>
          <h3 className='text-xl'>Confirm Order</h3>
        </div>
      </header>
      <main className='px-5'>
        {!loaded && <Spinner />}
        <ul className='border border-slate-100 p-2'>
          {productsToOrder.map((product) => (
            <li key={product.id}>
              <div className='flex items-baseline mb-2'>
                <h3 className='text-lg whitespace-normal text-left grow'>
                  {product.name}
                </h3>
                <p>{product.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className='mt-8'>
          <span className='font-bold text-xl'>
            Total order: <span className=''>${orderAmount.toFixed(2)}</span>
          </span>
        </div>
      </main>
      <footer className='flex justify-between fixed bottom-0 left-0 w-full py-4 px-5'>
        <button
          onClick={() => console.log('back')}
          className='bg-black py-2 w-36 rounded-full font-bold text-white cursor-pointer'>
          Back
        </button>
        <button
          className='bg-green-700 text-white font-bold py-2 w-36 rounded-full cursor-pointer'
          onClick={() => console.log('next')}>
          Confirm
        </button>
      </footer>
    </div>
  );
}
