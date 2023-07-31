const BASE_URL = 'http://localhost:8080/client';

export function getClientDetails(id: number) {
  return fetch(`${BASE_URL}/${id}`).then(async (response) => response.json());
}
