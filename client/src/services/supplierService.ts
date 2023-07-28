const BASE_URL = 'http://localhost:8080/supplier';

export function getClientSuppliers(id: Number) {
  return fetch(`${BASE_URL}/${id}`)
    .then(async (response) => {
      const suppliers = await response.json();
      return suppliers;
    })
    .catch((err) => console.log(`Error retrieving events: ${err}`));
}

// function createEvent(event) {
//   fetch(baseURL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(event),
//   })
//     .then((response) => response.json())
//     .catch((err) => console.log(`Error creating new event: ${err}`));
// }
