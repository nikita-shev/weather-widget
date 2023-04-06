import { ref, readonly } from 'vue';

import addLocation from '@store/actions/addLocation.js';

const state = ref([]);
const readonlyState = readonly(state);

const actions = {
   addLocation(country, city) {
      addLocation(state.value, { country, city });
   }
};

const initStore = () => {
   state.value = JSON.parse(localStorage.getItem('WeatherData')) || [];
};
initStore();

export default {
   state: readonlyState,
   addLocation: actions.addLocation
};
