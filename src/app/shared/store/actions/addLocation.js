import useWeatherData from '@use/useWeatherData.js';

import ADD_LOCATION from '@store/mutations/addLocation.js';
import saveData from '@store/utils/saveData.js';

export default async function addLocation(context, payload) {
   const { state, error } = context;
   const { country, city } = payload;
   const data = await useWeatherData(country, city);

   error.value = { status: !data, message: data ? '' : `City "${city}" not found!` };

   if (data) {
      ADD_LOCATION(context, { country, city: data.name, data });
      saveData(state.value);
   }
}
