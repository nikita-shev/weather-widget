import REVERSE_LOCATION from '@store/mutations/reverseLocation.js';
import saveData from '@store/utils/saveData.js';

export default function reverseLocation(context, payload) {
   const { state } = context;
   const [firstElemId, secondElemId] = payload.value;

   REVERSE_LOCATION(context, [
      state.value.find((item) => +item.id === +firstElemId),
      state.value.find((item) => +item.id === +secondElemId)
   ]);
   saveData(state.value);
}
