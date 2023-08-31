import { newProductType } from '../interfaces';
const BASE_URL = process.env.REACT_APP_SERVER_URL;

export function getSupplierProducts(supplierId: number) {
  return fetch(`${BASE_URL}/product/${supplierId}`);
}

export function addProductToSupplier(
  product: newProductType
): Promise<Response> {
  return fetch(`${BASE_URL}/product`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
}

export function getAllProducts(id: number) {
  return fetch(`${BASE_URL}/product/all/${id}`);
}
