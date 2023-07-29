// service for making the orders

import { OrderType } from '../app/interfaces';
const BASE_URL = 'http://localhost:8080/order';

export function sendOrder(order: OrderType) {
  fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((response) => console.log(response.json()))
    .catch((err) => console.log(`Error creating new supplier: ${err}`));
}
