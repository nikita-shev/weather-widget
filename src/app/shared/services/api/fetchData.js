const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export default async function fetchData(params) {
   try {
      const response = await fetch(`${API_URL}?${params}`);
      return response.json();
   } catch (error) {
      console.error(error);
   }
}
