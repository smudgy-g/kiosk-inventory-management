import { OrderType } from '../interfaces';
const BASE_URL = 'http://localhost:8080';

export function sendOrder(order: OrderType) {
  return fetch(`${BASE_URL}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
}
