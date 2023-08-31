const BASE_URL = process.env.REACT_APP_SERVER_URL;

export async function getClientDetails(id: number) {
  return fetch(`${BASE_URL}/client/${id}`)
    .then(async (response) => {
      const data = await response.json();
      return data;
    })
    .catch((error) => console.log(error));
}
