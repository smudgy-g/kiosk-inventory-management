import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaPlus, FaInfo } from 'react-icons/fa';
import { useSupplier } from '../contexts/SupplierProvider';
import { SupplierContextType } from '../interfaces';

interface SupplierComponentProps {
  key: string;
  name: string;
  id: number;
  setIsOpen: (x: boolean) => void;
  setSupplierToDelete: (x: number) => void;
}

export default function SupplierComponent({ id, name, setIsOpen, setSupplierToDelete }:SupplierComponentProps) {
  const { updateSupplierId, updateSupplierName } =
    useSupplier() as SupplierContextType;

  const navigate = useNavigate();

  async function handleClick() {
    await updateSupplierId(id);
    await updateSupplierName(name);
    navigate('/order');
  }

  function handleAddProduct() {
    updateSupplierId(id);
    updateSupplierName(name);
    navigate('/supplier/add/product');
  }

  function handleDelete() {
    setSupplierToDelete(id);
    setIsOpen(true);
  }

  function handleViewInfo() {
    updateSupplierId(id);
    updateSupplierName(name);
    navigate('/supplier/details');
  }

  return (
    <div className='grid grid-cols-3 gap-1 w-90vw items-center mt-6 p-2 rounded border border-accent'>
      <div className='col-span-1 cursor-pointer' onClick={handleClick}>
        <img src='/images/cocktail.png' alt='img' className='h-24 rounded-lg' />
      </div>
      <div className='flex flex-col justify-between h-full col-span-2 cursor-pointer'>
        <div className='text-left text-xl font-bold mb-2' onClick={handleClick}>
          {name}
        </div>
        <div className='flex justify-end gap-6'>
          <div
            className='bg-secondary p-3 rounded-xl cursor-pointer'
            onClick={handleDelete}>
            <FaTrash color='white' />
          </div>
          <div
            className='bg-secondary p-3 rounded-xl cursor-pointer'
            onClick={handleAddProduct}>
            <FaPlus color='white' />
          </div>
          <div
            className='bg-primary p-3 rounded-xl cursor-pointer'
            onClick={handleViewInfo}>
            <FaInfo color='white' />
          </div>
        </div>
      </div>
    </div>
  );
}
