export default function REMOVE_LOCATION({ state }, payload) {
   const { country, city } = payload;
   const idxLocation = state.value.findIndex(
      (item) => item.country === country && item.city === city
   );

   state.value.splice(idxLocation, 1);
   state.value = state.value.map((item, idx) => {
      item.order = idx + 1;
      return item;
   });
}
