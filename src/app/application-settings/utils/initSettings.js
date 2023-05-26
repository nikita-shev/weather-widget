import useAlignment from '@/app/application-settings/use/useAlignment.js';
import useBackground from '@/app/application-settings/use/useBackground.js';
import useContainerWidth from '@/app/application-settings/use/useContainerWidth.js';

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
