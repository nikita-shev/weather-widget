export default function ADD_LOCATION(state, payload) {
   const { country, city, data } = payload;
   const location = state.find((item) => item.data.id === data.id);

   if (!location) {
      state.push({ country, city, data });
   }
}
