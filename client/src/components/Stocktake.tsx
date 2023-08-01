import React, { useEffect, useState } from 'react';
import { GiPineapple } from 'react-icons/gi';
import {
  ClientContextType,
  ProductToOrderType,
  ProductType,
} from '../interfaces';
import { useNavigate } from 'react-router-dom';
import ProductComponent from './ProductComponent';
import Spinner from './Spinner';
import { useClient } from '../contexts/ClientProvider';
import { getAllProducts } from '../services/productService';

export default function OrderingComponent() {
  const [products, setProducts] = useState<ProductToOrderType[]>([]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const { clientId, clientName } =
    useClient() as ClientContextType as ClientContextType;
  const [productCount, setProductCount] = useState<ProductToOrderType[]>([]);

  function handleGoBack() {
    navigate(-1);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getAllProducts(clientId).then((response) =>
        response.json()
      );
      setProducts(res);
      setLoaded(true);
    };

    fetchProducts();
  }, [loaded]);

  const updateProductQuantity = (item: ProductToOrderType) => {
    const updatedCount = [...productCount];
    const productIndex = updatedCount.findIndex(
      (product) => product.id === item.id
    );
    if (productIndex !== -1) {
      updatedCount[productIndex].quantity = item.quantity;
    } else {
      updatedCount.push(item);
    }
    const filteredProducts = filterProductsToOrder(updatedCount);
    setProductCount(filteredProducts);
  };

  function filterProductsToOrder(arr: ProductToOrderType[]) {
    return arr.filter((item) => item.quantity > 0);
  }

  return (
    <>
      <header className='flex fixed top-0 right-0 left-0 py-5 px-7 mb-2 bg-background'>
        <GiPineapple size={'40px'} color='#E58806' />
        <div className='ml-6 text-right'>
          <h2 className='text-3xl font-bold mb-2 font-DMSerif'>{clientName}</h2>
          <h3 className='text-2xl font-bold'>Stocktake</h3>
        </div>
      </header>
      <main className='overflow-y-auto pb-10 mb-6 mt-24'>
        {!loaded && <Spinner />}
        <ul>
          {products.map((item) => (
            <ProductComponent
              key={item.id.toString()}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onUpdateQuantity={updateProductQuantity}
            />
          ))}
        </ul>
      </main>
      <footer className='flex justify-between fixed bottom-0 left-0 right-0 bg-background py-4 px-5'>
        <button
          onClick={handleGoBack}
          className='bg-secondary py-2 w-36 rounded-full font-boldcursor-pointer'>
          Back
        </button>
        <button
          className='bg-primary text-dark font-bold py-2 w-36 rounded-full cursor-pointer'
          onClick={() => console.log(productCount)}>
          Next
        </button>
      </footer>
    </>
  );
}
