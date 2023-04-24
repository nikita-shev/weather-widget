import { ref, readonly } from 'vue';

import initStore from '@store/utils/initStore.js';
import addLocation from '@store/actions/addLocation.js';
import removeLocation from '@store/actions/removeLocation.js';
import reverseLocation from '@store/actions/reverseLocation.js';

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
   },

   reverseLocation(payload) {
      reverseLocation({ state, error }, payload);
   }
};

initStore(state);

export default {
   state: readonlyState,
   error: readonlyError,
   addLocation: actions.addLocation,
   removeLocation: actions.removeLocation,
   reverseLocation: actions.reverseLocation
};
