import useWeatherData from '@use/useWeatherData.js';

export default function initStore(state) {
   const data = JSON.parse(localStorage.getItem('WeatherData'));

   if (data) {
      data.forEach(async (item) => {
         if (item) {
            item.data = await useWeatherData(item.country, item.city);
         }
      });
   }

   state.value = data ? data : [];
}
