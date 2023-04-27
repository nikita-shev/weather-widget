import { ref } from 'vue';
import useWeatherData from '@use/useWeatherData.js';

export default function initStore(state) {
   const data = ref([]);
   data.value = JSON.parse(localStorage.getItem('WeatherData'));

   if (data.value) {
      data.value.forEach(async (item) => {
         if (item) {
            item.data = await useWeatherData(item.country, item.city);
         }
      });
   }

   state.value = data.value ? data.value : [];
}
