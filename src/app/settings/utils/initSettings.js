import useAlignment from '@/app/settings/use/useAlignment.js';
import useBackground from '@/app/settings/use/useBackground.js';
import useContainerWidth from '@/app/settings/use/useContainerWidth.js';

export default function initSettings() {
   const data = JSON.parse(localStorage.getItem('WidgetSettings'));

   if (!data) {
      const settings = {
         verticalPosition: { value: true },
         containerWidth: { value: '280px' },
         background: { value: true }
      };

      localStorage.setItem('WidgetSettings', JSON.stringify(settings));
   }

   useAlignment();
   useBackground();

   const { createContainerWidth } = useContainerWidth();
   createContainerWidth();
}
