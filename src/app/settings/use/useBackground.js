import { ref, watch } from 'vue';
import getData from '@/app/settings/utils/getData.js';
import saveData from '@/app/settings/utils/saveData.js';

export default function useBackground() {
   const type = 'background';
   const data = getData(type);
   const background = ref(data.background.value);

   watch(
      background,
      (value) => {
         const widget = document.querySelector('.widget');
         widget.style.backgroundColor = value ? '' : 'transparent';

         saveData(type, { value });
      },
      { immediate: true }
   );

   return {
      background
   };
}
