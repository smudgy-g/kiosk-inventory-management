import React, { useEffect, useState } from 'react';
import { getSupplierProducts } from '../services/product.service';
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
  const [products, setProducts] = useState<ProductToOrderType[]>([]);
  // const [productsToOrder, setProductsToOrder] = useState<ProductToOrderType[]>(
  //   []
  // );
  const [filteredProductList, setFilteredProductList] = useState<
    ProductToOrderType[]
  >([]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const { supplierId, supplierName } = useSupplier() as SupplierContextType;

  function handleGoBack() {
    navigate(-1);
  }

  useEffect(() => {
    const fetchSupplierProducts = async () => {
      if (supplierId) {
        const res = await getSupplierProducts(supplierId).then((response) =>
          response.json()
        );
        const prodWithCounts = res.map((item: ProductType) => {
          return { ...item, quantity: 0 };
        });
        setProducts(prodWithCounts);
        setFilteredProductList(prodWithCounts);
        setLoaded(true);
      }
    };

    fetchSupplierProducts();
  }, [loaded]);

  const updateProductQuantity = (item: ProductToOrderType) => {
    const updatedProducts = [...products];
    const productIndex = updatedProducts.findIndex(
      (product) => product.id === item.id
    );
    if (productIndex !== -1) {
      updatedProducts[productIndex].quantity = item.quantity;
    } else {
      updatedProducts.push(item);
    }
    
    setProducts(updatedProducts);
  };

  function handleNext() {
    const filteredProducts = removeZeroQuantities(products);
    console.log(filteredProducts);
    navigate('/order/confirm', { state: { filteredProducts, supplierName } });
  }
  function removeZeroQuantities(arr: ProductToOrderType[]) {
    return arr.filter((item) => item.quantity > 0);
  }

  function filterBySearch(event: any) {
    const query = event.target.value;
    if (query) {
      let updatedList = [...products];
      updatedList = updatedList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
      setFilteredProductList(updatedList);
    } else {
      setFilteredProductList(products);
    }
  }

  return (
    <>
      <header className='fixed top-0 left-0 right-0 pt-5 px-7 mb-2 bg-background'>
        <div className='flex'>
          <GiPineapple size={'40px'} color={'#E58806'} />
          <div className='mr-6 text-right grow'>
            <h2 className='text-4xl font-bold mb-2 font-DMSerif text-accent'>
              {supplierName}
            </h2>
            <h3 className='text-2xl font-bold'>Create Order</h3>
          </div>
        </div>
        <input
          type='text'
          name='search'
          placeholder='Enter product name'
          className='bg-background text-light mt-3 p-2 rounded-md w-3/4 text-center'
          onChange={filterBySearch}
        />
      </header>
      <main className='overflow-y-auto pb-10 mb-6 mt-36'>
        {!loaded && <Spinner />}
        <ul>
          {filteredProductList.map((item) => (
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
      <footer className='flex justify-between fixed bottom-0 left-0 w-full py-4 px-5'>
        <button
          onClick={handleGoBack}
          className='bg-secondary py-2 w-36 rounded-full font-bold cursor-pointer'>
          Back
        </button>
        <button
          className='bg-primary text-dark font-bold py-2 w-36 rounded-full cursor-pointer'
          onClick={handleNext}>
          Next
        </button>
      </footer>
    </>
  );
}
