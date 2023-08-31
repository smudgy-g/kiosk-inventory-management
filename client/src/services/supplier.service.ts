import { newSupplier } from '../interfaces';
const BASE_URL = process.env.REACT_APP_SERVER_URL;

export function getClientSuppliers(id: number) {
  return fetch(`${BASE_URL}/supplier/${id}`)
    .then(async (response) => {
      const suppliers = await response.json();
      return suppliers;
    })
    .catch((err) => console.log(`Error retrieving suppliers: ${err}`));
}

export function addSupplierToClient(supplier: newSupplier): Promise<Response> {
  return fetch(`${BASE_URL}/supplier`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(supplier),
  });
}

export async function deleteSupplier(id: number): Promise<Response> {
  return await fetch(`${BASE_URL}/supplier`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ supplierId: id }),
  });
}

export async function getSupplierDetails(id: number) {
  return fetch(`${BASE_URL}/supplier/details`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id }),
  }).then((response) => response.json());
}
