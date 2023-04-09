import useWeatherData from '@use/useWeatherData.js';

import ADD_LOCATION from '@store/mutations/addLocation.js';
import saveData from '@store/actions/saveData.js';

export default async function addLocation(state, payload) {
   const { country, city } = payload;
   const data = await useWeatherData(country, city);

   if (data) {
      ADD_LOCATION(state, { country, city, data });
      saveData(state);
   }
}
