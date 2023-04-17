import REMOVE_LOCATION from '@store/mutations/removeLocation.js';
import hasLocation from '@store/utils/hasLocation.js';
import saveData from '@store/utils/saveData.js';

export default function removeLocation(context, payload) {
   const { state } = context;
   const { country, city } = payload;
   const isLocation = hasLocation(state.value, { country, city });

   if (isLocation) {
      REMOVE_LOCATION(context, { country, city });
      saveData(state.value);
   }
}
