import { ref, onBeforeMount } from 'vue';
import lookup from 'country-code-lookup';
import fetchData from '@/app/shared/services/api/fetchData';

export default function useWeatherData(country, city) {
   const API_KEY = import.meta.env.VITE_API_KEY;
   const { iso3: countryCode } = lookup.byCountry(country);
   const data = ref({});

   const params = new URLSearchParams({
      q: `${city},${countryCode}`,
      units: 'metric',
      lang: 'ru',
      appid: `${API_KEY}`
   }).toString();

   async function getData() {
      data.value = (await fetchData(params)) || {};
   }

   onBeforeMount(getData);

   return { data };
}
