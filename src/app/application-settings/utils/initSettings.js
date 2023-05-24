import useAlignment from '@/app/application-settings/use/useAlignment.js';
import useBackground from '@/app/application-settings/use/useBackground.js';

export default function initSettings() {
   const data = JSON.parse(localStorage.getItem('WidgetSettings'));

   if (!data) {
      const settings = {
         alignment: { value: false },
         width: { value: '320px' },
         background: { value: true }
      };

      localStorage.setItem('WidgetSettings', JSON.stringify(settings));
   }

   useAlignment();
   useBackground();
}
