export default function hasLocation(state, payload) {
   const { country, city } = payload;
   const location = state.find((item) => item.country === country && item.city === city);

   return Boolean(location);
}
