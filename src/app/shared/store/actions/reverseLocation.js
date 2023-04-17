import REVERSE_LOCATION from '@store/mutations/reverseLocation.js';
import saveData from '@store/utils/saveData.js';

export default function reverseLocation(context, payload) {
   const { state } = context;

   REVERSE_LOCATION(context, payload);
   saveData(state.value);
}
