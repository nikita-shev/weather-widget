import { ref, watch } from 'vue';
import getData from '@/app/settings/utils/getData.js';
import saveData from '@/app/settings/utils/saveData.js';

export default function useAlignment() {
   const type = 'verticalPosition';
   const data = getData(type);
   const verticalPosition = ref(data.verticalPosition.value);

   watch(
      verticalPosition,
      (value) => {
         value ? document.body.classList.remove('v-align') : document.body.classList.add('v-align');

         saveData(type, { value });
      },
      { immediate: true }
   );

   return {
      verticalPosition
   };
}
