const BASE_URL = 'http://localhost:8080/client';

export function getClientDetails(id: Number) {
  return fetch(`${BASE_URL}/${id}`);
}
