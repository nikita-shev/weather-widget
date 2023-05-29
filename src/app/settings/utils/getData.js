export default function getData(type) {
   const data = JSON.parse(localStorage.getItem('WidgetSettings'));

   return {
      [type]: data[type]
   };
}
