import { ref, readonly } from 'vue';

import addLocation from '@store/actions/addLocation.js';
import removeLocation from '@store/actions/removeLocation.js';

const error = ref({ status: false, message: '' });
const state = ref([]);
const readonlyState = readonly(state);
const readonlyError = readonly(error);

const actions = {
   addLocation(country, city) {
      addLocation({ state, error }, { country, city });
   },

   removeLocation(country, city) {
      removeLocation({ state, error }, { country, city });
   }
};

const initStore = () => {
   state.value = JSON.parse(localStorage.getItem('WeatherData')) || [];
};
initStore();

export default {
   state: readonlyState,
   error: readonlyError,
   addLocation: actions.addLocation,
   removeLocation: actions.removeLocation
};
