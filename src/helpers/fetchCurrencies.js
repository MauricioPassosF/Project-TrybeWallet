export const getCurrencies = async () => {
  const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(BASE_URL);
  const data = await response.json();
  console.log(data);
  return data;
};
