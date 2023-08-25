const BASE_URL = 'http://localhost:8080';

export async function getClientDetails(id: number) {
  return fetch(`${BASE_URL}/client/${id}`)
    .then(async (response) => {
      const data = await response.json();
      return data;
    })
    .catch((error) => console.log(error));
}
