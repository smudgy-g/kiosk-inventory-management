import { newProductType } from '../interfaces';
const BASE_URL = 'http://localhost:8080/product';

export function getSupplierProducts(supplierId: string) {
  const id = parseInt(supplierId);
  return fetch(`${BASE_URL}/product/${id}`);
}

export function addProductToSupplier(
  product: newProductType
): Promise<Response> {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
}
