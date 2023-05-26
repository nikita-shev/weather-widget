export default function saveData(type, value) {
   const data = JSON.parse(localStorage.getItem('WidgetSettings'));

   data[type] = value;

   localStorage.setItem('WidgetSettings', JSON.stringify(data));
}
