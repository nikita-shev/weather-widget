import { ref, readonly } from 'vue';

import addLocation from '@store/actions/addLocation.js';
import removeLocation from '@store/actions/removeLocation.js';

const state = ref([]);
const readonlyState = readonly(state);

const actions = {
   addLocation(country, city) {
      addLocation(state.value, { country, city });
   },

   removeLocation(country, city) {
      removeLocation(state.value, { country, city });
   }
};

const initStore = () => {
   state.value = JSON.parse(localStorage.getItem('WeatherData')) || [];
};
initStore();

export default {
   state: readonlyState,
   addLocation: actions.addLocation,
   removeLocation: actions.removeLocation
};
