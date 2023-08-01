import React, { useEffect, useState } from 'react';
import { getSupplierProducts } from '../services/productService';
import {
  ProductToOrderType,
  ProductType,
  SupplierContextType,
} from '../interfaces';
import { useNavigate } from 'react-router-dom';
import ProductComponent from './ProductComponent';
import Spinner from './Spinner';
import { useSupplier } from '../contexts/SupplierProvider';
import { GiPineapple } from 'react-icons/gi';
// import { useClient } from '../contexts/ClientProvider';

export default function OrderingComponent() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const { supplierId, supplierName } = useSupplier() as SupplierContextType;
  const [productsToOrder, setProductsToOrder] = useState<ProductToOrderType[]>(
    []
  );
  const [filteredProductList, setFilteredProductList] =
    useState < ProductType[]>([]);

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
        setFilteredProductList(products);
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

  function filterBySearch (event: any) {
    const query = event.target.value;
    let updatedList = [...products];
    updatedList = updatedList.filter(item => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    });
    setFilteredProductList(updatedList);
  }

  return (
    <>
      <header className='flex py-5 px-7 mb-2'>
        <GiPineapple size={'40px'} color={'#E58806'} />
        <div className='ml-6 text-left'>
          <h2 className='text-4xl font-bold mb-2 font-DMSerif text-accent'>
            {supplierName}
          </h2>
          <h3 className='text-2xl font-bold'>Create Order</h3>
        </div>
      </header>
      <main className='h-full overflow-y-auto pb-10'>
        {!loaded && <Spinner />}
        <input
          type='text'
          name='search'
          placeholder='Enter product name'
          className='bg-background text-light'
          onChange={filterBySearch}
        />
        <ul>
          {filteredProductList.map((item) => (
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
          className='bg-secondary py-2 w-36 rounded-full font-bold cursor-pointer'>
          Back
        </button>
        <button
          className='bg-primary text-dark font-bold py-2 w-36 rounded-full cursor-pointer'
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
