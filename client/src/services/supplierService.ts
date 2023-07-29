import { newSupplier } from '../app/interfaces';
const BASE_URL = 'http://localhost:8080/supplier';

export function getClientSuppliers(id: Number) {
  return fetch(`${BASE_URL}/${id}`)
    .then(async (response) => {
      const suppliers = await response.json();
      return suppliers;
    })
    .catch((err) => console.log(`Error retrieving suppliers: ${err}`));
}

export function addSupplierToClient(supplier: newSupplier): Promise<Response> {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(supplier),
  });
}

export function deleteSupplier(id: number) {
  return fetch(`${BASE_URL}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ supplierId: id }),
  });
}
