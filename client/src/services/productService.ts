import { ProductType, newProductType } from '../app/interfaces';

// import { newSupplier } from '../app/interfaces';
const BASE_URL = 'http://localhost:8080';

export function getSupplierProducts(supplierId: string) {
  const id = parseInt(supplierId);
  return fetch(`${BASE_URL}/product/${id}`);
}

export function addProductToSupplier(product: newProductType) {
  return fetch(`${BASE_URL}/product`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(product),
  });
}
