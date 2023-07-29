import { OrderType } from '../app/interfaces';
const BASE_URL = 'http://localhost:8080/order';

export function sendOrder(order: OrderType) {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
}
