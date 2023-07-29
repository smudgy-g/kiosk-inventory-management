// import { useAppSelector } from "../app/hooks";
import { useEffect, useState } from 'react';
import { getSupplierProducts } from '../services/productService';
import { Product } from '../app/interfaces';
import { useLocation, useNavigate } from 'react-router-dom';
import { LocationState } from '../app/interfaces';
import ProductComponent from './ProductComponent';
import { ProductToOrder } from '../app/interfaces';

export default function OrderingComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const clientId = (location.state as LocationState)?.id;
  const supplierName = (location.state as LocationState)?.name;
  const [productsToOrder, setProductsToOrder] = useState<ProductToOrder[]>([]);

  function handleGoBack() {
    navigate(-1);
  }

  useEffect(() => {
    const fetchSuppliers = async () => {
      if (clientId) {
        const res = await getSupplierProducts(clientId);
        setProducts(res);
        setLoaded(true);
      }
    };

    fetchSuppliers();
  }, [loaded]);

  // Callback function to update the quantity of a product in the state
  const updateProductQuantity = (item: ProductToOrder) => {
    // if (item.quantity === 0) {return};
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

  // removed any products with no quantity
  function filterProductsToOrder(arr: ProductToOrder[]) {
    return arr.filter(item => item.quantity > 0)
  }

  // pass on to nodemailer in seperate function to create email template and send off

  return (
    <>
      <header className='flex py-5 px-7 mb-2'>
        <img src='/images/orange.png' alt='orange logo' className='h-10 ' />
        <div className='grow'>
          <h1 className='text-3xl font-bold mb-2'>{supplierName}</h1>
          <h3 className='text-xl'>Create Order</h3>
        </div>
      </header>
      <main className='h-full overflow-y-auto pb-10'>
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
        <button className='bg-green-700 text-white font-bold py-2 w-36 rounded-full cursor-pointer' onClick={() => console.log(productsToOrder)}>
          Next
        </button>
      </footer>
    </>
  );
}
