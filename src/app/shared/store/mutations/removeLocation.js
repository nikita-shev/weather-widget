export default function REMOVE_LOCATION(state, payload) {
   const { country, city } = payload;
   const idxLocation = state.findIndex((item) => item.country === country && item.city === city);

   state.splice(idxLocation, 1)
}
