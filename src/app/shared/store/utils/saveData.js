export default function saveData(state) {
   localStorage.setItem('WeatherData', JSON.stringify(state));
}
