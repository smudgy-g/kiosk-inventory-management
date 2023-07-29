// import { newSupplier } from '../app/interfaces';
const BASE_URL = 'http://localhost:8080';

export function getSupplierProducts(supplierId: string) {
  const id = parseInt(supplierId);
  return fetch(`${BASE_URL}/product/${id}`)
    .then(async (response) => {
      const products = await response.json();
      return products;
    })
    .catch((err) => console.log(`Error retrieving products: ${err}`));
}

