import { newSupplier } from '../app/interfaces';
const BASE_URL = 'http://localhost:8080/client';

export function getClientDetails(id: Number) {
  return fetch(`${BASE_URL}/${id}`)
    .then(async (response) => {
      const client = await response.json();
      return client;
    })
    .catch((err) => console.log(`Error retrieving suppliers: ${err}`));
}
