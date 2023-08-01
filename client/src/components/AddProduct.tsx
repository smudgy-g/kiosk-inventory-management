import React, { FormEvent } from 'react';
import { addProductToSupplier } from '../services/productService';
import { SupplierContextType, newProductType } from '../interfaces';
import { useState } from 'react';
import { useSupplier } from '../contexts/SupplierProvider';
import { useNavigate } from 'react-router-dom';
import LogoComponent from './Logo';

export default function AppProduct() {
  const [productName, setProductName] = useState<string>('');
  const [productId, setProductId] = useState<number | undefined>(undefined);
  const [price, setPrice] = useState<number>(0);
  const navigate = useNavigate();

  const { supplierId } = useSupplier() as SupplierContextType;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const product: newProductType = {
      supplierId: supplierId,
      productName: productName,
      productId: productId,
      price: price,
    };
    console.log(product);
    addProductToSupplier(product)
      .then(() => {
        navigate('/client');
      })
      .catch((error: Error) => {
        console.log(error);
        alert('Unable to add product. Please try again.');
      });

    //add message modal
  }

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <>
      <header className='text-left py-5 px-7 mb-2'>
        <LogoComponent />
        <h1 className='text-3xl font-bold'>Add Product</h1>
      </header>
      <main className='text-left'>
        <form onSubmit={handleSubmit} className='flex flex-col px-7 '>
          <label className='text-lg mb-2 mt-6 font-bold'>Product Name:</label>
          <input
            name='productName'
            placeholder='Product name'
            type='text'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className='border border-solid border-slate-100 p-2 rounded-md'
          />
          <label className='text-lg mb-2 mt-6 font-bold'>Product Code:</label>
          <input
            name='productId'
            placeholder='Product code'
            type='number'
            value={productId}
            onChange={(e) => setProductId(parseInt(e.target.value))}
            required
            className='border border-solid border-slate-100 p-2 rounded-md'
          />
          <label className='text-lg mb-2 mt-6 font-bold'>Price:</label>
          <input
            name='price'
            placeholder='price'
            value={price}
            type='number'
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            required
            className='border border-solid border-slate-100 p-2 rounded-md'
          />
          <button
            type='submit'
            className='bg-primary text-dark rounded-full mt-10 p-2 font-bold'>
            Add Product
          </button>
        </form>
      </main>
      <footer className='mt-8'>
        <button
          onClick={handleGoBack}
          className='bg-secondary py-2 w-36 rounded-full font-bold  cursor-pointer'>
          Back
        </button>
      </footer>
    </>
  );
}
