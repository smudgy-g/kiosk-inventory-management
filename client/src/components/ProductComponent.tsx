import React, { useState, useEffect, ChangeEvent } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { ProductComponentTypes } from '../interfaces';

export default function ProductComponent(props: ProductComponentTypes) {
  const [quantity, setQuantity] = useState(0);

  useEffect (() => {
    setQuantity(props.quantity)
  }, [])

  useEffect(() => {
    const productToOrder = {
      id: props.id,
      price: props.price,
      quantity: quantity,
      name: props.name,
    };
    props.onUpdateQuantity(productToOrder);
  }, [quantity]);

  function increment() {
    setQuantity(quantity + 1);
  }
  function decrement() {
    if (quantity - 1 < 0) setQuantity(0);
    else setQuantity(quantity - 1);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value, 10);
    if (value - 1 < 0) setQuantity(0);
    else setQuantity(value);
    setQuantity(value);
  }

  return (
    <div className='flex justify-between m-5'>
      <h3 className='text-md whitespace-normal text-left pr-1'>{props.name}</h3>
      <div className='flex items-center'>
        <div className='cursor-pointer' onClick={increment}>
          <AiOutlinePlusCircle color='white' size='25px' />
        </div>
        <input
          name='quantity'
          type='number'
          step={0.1}
          value={quantity}
          min={0}
          max={99}
          onChange={handleChange}
          className='w-7 text-center text-xl text-text font-bold mx-1 bg-background'
        />
        <div className='cursor-pointer' onClick={decrement}>
          <AiOutlineMinusCircle color='white' size='25px' />
        </div>
      </div>
    </div>
  );
}
