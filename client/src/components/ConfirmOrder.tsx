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
import { sendOrder } from '../services/ordering.service';
import { GiPineapple } from 'react-icons/gi';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

const StyledDatePicker = styled(DatePicker)(() => ({
  '& .MuiInputBase-input': {
    backgroundColor: 'white',
    borderRadius: '4px',
    padding: '10px',
    boxShadow: 'none',
    '&:hover': { boxShadow: 'none' },
    '&:focus': { boxShadow: 'none' },
  },
  '& .MuiButtonBase-input': {
    backgroundColor: 'white',
    borderRadius: '4px',
    padding: '10px',
    boxShadow: 'none',
  },
}));

export default function ConfirmOrder() {
  const { supplierId, supplierName } = useSupplier() as SupplierContextType;
  const { clientId } = useClient() as ClientContextType;
  const [orderAmount, setOrderAmount] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);
  const [comment, setComment] = useState('');
  const [selectedDate, setSelectedDate] = useState<string>(dayjs().add(1, 'day').format('DD/MM/YYYY'));
  const location = useLocation();
  const navigate = useNavigate();
  const productsToOrder: ProductToOrderType[] = location.state?.filteredProducts || [];

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
    navigate('/order');
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
      date: selectedDate,
      comment: comment,
    };
    sendOrder(order)
      .then(() => navigate('/client'))
      .catch(() => alert('Error sending order. PLease try again.'));
  }

  function handleDateChange(date: any) {
    setSelectedDate(date.format('DD/MM/YYYY'));
  }

  return (
    <div>
      <header className='fixed top-0 left-0 right-0 flex pt-5 px-7 mb-2 bg-background'>
        <GiPineapple size={'40px'} color='#E58806' />
        <div className='grow text-right mr-6'>
          <h2 className='text-3xl font-bold mb-2 text-accent font-DMSerif'>
            {supplierName}
          </h2>
          <h3 className='text-xl'>Confirm Order</h3>
        </div>
      </header>
      <main className='px-5 overflow-auto mb-20 mt-36 pb-2'>
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
        <div className='flex flex-col items-center mt-6'>
          <input
            name='comment'
            value={comment}
            placeholder='Additional comments'
            onChange={(e) => setComment(e.target.value)}
            className='mb-3 w-3/4 border border-solid border-slate-100 p-2 rounded-md'
          />
          <StyledDatePicker format='DD/MM/YYYY' onChange={handleDateChange} />
        </div>
      </main>
      <footer className='flex justify-between fixed bottom-0 left-0 w-full py-4 px-5 bg-background'>
        <button
          onClick={() => navigateBack()}
          className='bg-secondary py-2 w-36 rounded-full font-bold cursor-pointer'>
          Back
        </button>
        <button
          className='bg-primary text-dark  font-bold py-2 w-36 rounded-full cursor-pointer'
          onClick={send}>
          Send
        </button>
      </footer>
    </div>
  );
}
