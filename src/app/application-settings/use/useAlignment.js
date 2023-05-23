import { ref, watch } from 'vue';
import getData from '@/app/application-settings/utils/getData.js';
import saveData from '@/app/application-settings/utils/saveData.js';

export default function useAlignment() {
   const type = 'alignment';
   const data = getData(type);
   const alignment = ref(data.alignment.value);

   watch(
      alignment,
      (value) => {
         value ? document.body.classList.add('v-align') : document.body.classList.remove('v-align');

         saveData(type, { value });
      },
      { immediate: true }
   );

   return {
      alignment
   };
}
