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

// export function addSupplierToClient(supplier: newSupplier) {
//   fetch(`${BASE_URL}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(supplier),
//   })
//     .then((response) => console.log(response.json()))
//     .catch((err) => console.log(`Error creating new event: ${err}`));
// }
