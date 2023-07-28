import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
// import { FiInfo } from 'react-icons/fi';

interface ProductComponentTypes {
  name: String;
  price: String;
}

export default function ProductComponent(props: ProductComponentTypes) {
  const [quantity, setQuantity] = useState(0);
  

  function increment() {
    setQuantity(quantity + 1);
  }
  function decrement() {
    if (quantity - 1 < 0) setQuantity(0);
    else setQuantity(quantity - 1);
  }

  function handleChange(e: any) {
    const value = parseInt(e.target.value, 10);
    if (value - 1 < 0) setQuantity(0);
    else setQuantity(value);
    setQuantity(value);
  }


  return (
    <div className='flex justify-between m-5'>
      <h3 className='text-lg whitespace-normal text-left'>{props.name}</h3>
      <div className='flex items-center'>
        <div
          className='bg-blue-600 rounded-full cursor-pointer'
          onClick={increment}>
          <AiOutlinePlusCircle color='white' size='30px' />
        </div>
        <input
          name='quantity'
          type='number'
          value={quantity}
          min={0}
          max={99}
          onChange={handleChange}
          className='w-8 text-center text-lg font-bold mx-2'
        />
        <div
          className='bg-blue-600 rounded-full cursor-pointer'
          onClick={decrement}>
          <AiOutlineMinusCircle color='white' size='30px' />
        </div>
      </div>
    </div>
  );
}
