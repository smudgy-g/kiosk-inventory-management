import { OrderType } from '../interfaces';
const BASE_URL = process.env.REACT_APP_SERVER_URL;

export function sendOrder(order: OrderType) {
  return fetch(`${BASE_URL}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
}
