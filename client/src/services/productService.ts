// import { newSupplier } from '../app/interfaces';
const BASE_URL = 'http://localhost:8080';

export function getSupplierProducts(supplierId: string) {
  const id = parseInt(supplierId);
  return fetch(`${BASE_URL}/product/${id}`);
}

