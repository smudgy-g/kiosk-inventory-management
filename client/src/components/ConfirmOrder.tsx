import React, { useEffect, useState } from 'react';
import {
  ProductToOrderType,
  OrderType,
  ClientContextType,
  SupplierContextType,
} from '../interfaces';
import { useSupplier } from '../contexts/SupplierProvider';
import { useClient } from '../contexts/ClientProvider';
import Spinner from './Spinner';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendOrder } from '../services/orderingService';
import { GiPineapple } from 'react-icons/gi';
import { BiSend } from 'react-icons/bi';

//props: { products: ProductToOrder[] }
export default function ConfirmOrder() {
  const { supplierId, supplierName } = useSupplier() as SupplierContextType;
  const { clientId } = useClient() as ClientContextType;
  const [orderAmount, setOrderAmount] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);
  const [comment, setComment] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const productsToOrder: ProductToOrderType[] =
    location.state?.productsToOrder || [];

  useEffect(() => {
    const total = totalOrderAmount(productsToOrder);
    setOrderAmount(total);
    setLoaded(true);
  }, []);

  function totalOrderAmount(arr: ProductToOrderType[]) {
    return arr.reduce((acc, { quantity, price }) => {
      const subTotal = quantity * price;
      acc = acc + subTotal;
      return acc;
    }, 0);
  }

  function navigateBack() {
    // navigate('/order', { state: { productsToOrder: productsToOrder } });
    navigate(-1);
  }

  function send() {
    const order: OrderType = {
      clientId: clientId,
      supplierId: supplierId,
      price: orderAmount,
      products: productsToOrder.map((product) => ({
        productName: product.name,
        id: product.id,
        quantity: product.quantity,
      })),
    };
    sendOrder(order)
      .then(() => navigate('/client'))
      .catch((err) => alert('Error sending order. PLease try again'));
  }

  return (
    <div>
      <header className='flex py-5 px-7 mb-2'>
        <GiPineapple size={'40px'} color='#E58806' />
        <div className='grow text-left ml-6'>
          <h2 className='text-3xl font-bold mb-2 text-accent font-DMSerif'>
            {supplierName}
          </h2>
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
        <input
          name='comment'
          value={comment}
          placeholder='Additional comments'></input>
        <div className='mt-8'>
          <span className='font-bold text-xl'>
            Total order: <span className=''>${orderAmount.toFixed(2)}</span>
          </span>
        </div>
      </main>
      <footer className='flex justify-between fixed bottom-0 left-0 w-full py-4 px-5'>
        <button
          onClick={() => navigateBack()}
          className='bg-secondary py-2 w-36 rounded-full font-bold cursor-pointer'>
          Back
        </button>
        <button
          className='bg-primary text-dark  font-bold py-2 w-36 rounded-full cursor-pointer'
          onClick={send}>
          Send
          {/* <BiSend size={'30px'} /> */}
        </button>
      </footer>
    </div>
  );
}
