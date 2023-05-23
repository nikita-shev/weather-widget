import useAlignment from "@/app/application-settings/use/useAlignment.js";

export default function initSettings() {
   const data = JSON.parse(localStorage.getItem('WidgetSettings'));

   if (!data) {
      const settings = {
         alignment: { value: false },
         width: { value: '320px' },
         background: { value: false }
      };

      localStorage.setItem('WidgetSettings', JSON.stringify(settings));
   }

   useAlignment();
}
