const BASE_URL = 'http://localhost:8080/client';

export function getClientDetails(id: number) {
  return fetch(`${BASE_URL}/${id}`)
    .then(async (response) => {
      const data = await response.json();
      console.log(data);
      return data;
    })
    .catch((error) => console.log(error));
}
