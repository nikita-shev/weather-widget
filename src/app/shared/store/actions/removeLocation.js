import REMOVE_LOCATION from '@store/mutations/removeLocation.js';
import hasLocation from '@store/utils/hasLocation.js';
import saveData from '@store/utils/saveData.js';

export default function removeLocation(state, payload) {
   const { country, city } = payload;
   const isLocation = hasLocation(state, { country, city });

   if (isLocation) {
      REMOVE_LOCATION(state, { country, city });
      saveData(state);
   }
}
