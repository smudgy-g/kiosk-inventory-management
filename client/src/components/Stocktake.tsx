import React, { useEffect, useState } from 'react';
import { getSupplierProducts } from '../services/productService';
import { GiPineapple } from 'react-icons/gi';
import {
  ProductToOrderType,
  ProductType,
  SupplierContextType,
} from '../interfaces';
import { useNavigate } from 'react-router-dom';
import ProductComponent from './ProductComponent';
import Spinner from './Spinner';
import { useSupplier } from '../contexts/SupplierProvider';
// import { useClient } from '../contexts/ClientProvider';

export default function OrderingComponent() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  // const { clientId } = useClient() as ClientContextType;
  const { supplierId, supplierName } = useSupplier() as SupplierContextType;
  const [productsToOrder, setProductsToOrder] = useState<ProductToOrderType[]>(
    []
  );

  function handleGoBack() {
    navigate(-1);
  }

  useEffect(() => {
    const fetchSupplierProducts = async () => {
      if (supplierId) {
        const res = await getSupplierProducts(supplierId).then((response) =>
          response.json()
        );
        setProducts(res);
        setLoaded(true);
      }
    };

    fetchSupplierProducts();
  }, [loaded]);

  const updateProductQuantity = (item: ProductToOrderType) => {
    const updatedProducts = [...productsToOrder];
    const productIndex = updatedProducts.findIndex(
      (product) => product.id === item.id
    );
    if (productIndex !== -1) {
      updatedProducts[productIndex].quantity = item.quantity;
    } else {
      updatedProducts.push(item);
    }
    const filteredProducts = filterProductsToOrder(updatedProducts);
    setProductsToOrder(filteredProducts);
  };

  function filterProductsToOrder(arr: ProductToOrderType[]) {
    return arr.filter((item) => item.quantity > 0);
  }

  return (
    <>
      <header className='flex py-5 px-7 mb-2'>
        <GiPineapple size={'40px'} />
        <div className='grow'>
          <h1 className='text-3xl font-bold mb-2'>{supplierName}</h1>
          <h3 className='text-xl'>Create Order</h3>
        </div>
      </header>
      <main className='h-full overflow-y-auto pb-10'>
        {!loaded && <Spinner />}
        <ul>
          {products.map((item) => (
            <ProductComponent
              key={item.id.toString()}
              id={item.id}
              name={item.name}
              price={item.price}
              onUpdateQuantity={updateProductQuantity}
            />
          ))}
        </ul>
      </main>
      <footer className='flex justify-between fixed bottom-0 left-0 w-full py-4 px-5'>
        <button
          onClick={handleGoBack}
          className='bg-black py-2 w-36 rounded-full font-bold text-white cursor-pointer'>
          Back
        </button>
        <button
          className='bg-green-700 text-white font-bold py-2 w-36 rounded-full cursor-pointer'
          onClick={() =>
            navigate('/order/confirm', {
              state: { productsToOrder, supplierName },
            })
          }>
          Next
        </button>
      </footer>
    </>
  );
}
