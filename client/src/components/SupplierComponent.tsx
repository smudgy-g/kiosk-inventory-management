import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';

import { useSupplierContext } from '../app/store';

interface SupplierComponentProps {
  key: string;
  name: string;
  id: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onDelete: Function;
}

export default function SupplierComponent({
  id,
  name,
  onDelete,
}: SupplierComponentProps) {
  const { setSupplierId } = useSupplierContext();
  const navigate = useNavigate();

  function handleClick() {
    setSupplierId(id);
    navigate('/products/', { state: { id, name } });
  }

  function handleDelete() {
    onDelete();
  }

  return (
    <div className='grid grid-cols-3 gap-1 w-90vw items-center mt-6 p-2 rounded shadow-md'>
      <div className='col-span-1' onClick={handleClick}>
        <img src='/images/cocktail.png' alt='img' className='h-24 rounded-lg' />
      </div>
      <div className='flex flex-col justify-between h-full col-span-2'>
        <div className='text-left text-xl font-bold mb-2' onClick={handleClick}>
          {name}
        </div>
        <div className='flex justify-end gap-6'>
          <div
            className='bg-blue-600 p-3 rounded-xl cursor-pointer'
            onClick={handleDelete}>
            <FaTrash color='white' />
          </div>
          <div className='bg-blue-600 p-3 rounded-xl cursor-pointer'>
            <FiInfo color='white' />
          </div>
        </div>
      </div>
    </div>
  );
}
