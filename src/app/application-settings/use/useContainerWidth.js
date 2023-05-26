import { ref } from 'vue';
import getData from '@/app/application-settings/utils/getData.js';
import saveData from '@/app/application-settings/utils/saveData.js';

export default function useContainerWidth() {
   const type = 'containerWidth';
   const data = getData(type);
   const containerWidth = ref(data.containerWidth.value);

   const calcWidth = (value, units) => {
      const width = parseInt(value);
      const minWidth = 280;
      let calculationResult = null;

      if (units === '%') {
         const screen = document.documentElement;
         const screenWidth = (parseInt(getComputedStyle(screen).width) / 100) * width; // %
         const windowInnerWidth = ((minWidth / window.innerWidth) * 100).toFixed(3); // %

         calculationResult = screenWidth < minWidth ? windowInnerWidth : width;
      } else {
         calculationResult = width < minWidth ? minWidth : width;
      }

      return `${calculationResult}${units}`;
   };

   const createContainerWidth = (value) => {
      const regExp = /^[0-9]+(px|%)$/gi;
      const width = value ?? containerWidth.value;

      if (regExp.test(width)) {
         const units = width.match(/(px|%)$/gi)?.join();
         const calculationResult = calcWidth(width, units);

         containerWidth.value = calculationResult;

         document.documentElement.style.setProperty('--container-width', calculationResult);
         saveData(type, { value: calculationResult });
      }
   };

   return {
      containerWidth,
      createContainerWidth
   };
}
