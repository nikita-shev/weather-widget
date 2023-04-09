import fetchData from '@services/api/fetchData.js';
import getCountryCode from '@services/getCountryCode.js';

export default async function useWeatherData(country, city) {
   const API_KEY = import.meta.env.VITE_API_KEY;
   const { countryCode, status } = getCountryCode(country);

   if (status) {
      const params = new URLSearchParams({
         q: `${city},${countryCode}`,
         units: 'metric',
         lang: 'en',
         appid: `${API_KEY}`
      }).toString();
      const data = await fetchData(params);

      return data.cod === 200 ? data : null;
   }

   return null;
}
