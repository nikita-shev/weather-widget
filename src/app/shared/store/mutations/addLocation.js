export default function ADD_LOCATION({ state, error }, payload) {
   const location = state.value.find((item) => item.data.id === payload.data.id);

   error.value = {
      status: Boolean(location),
      message: location ? `Город "${payload.city}" был добавлен ранее!` : ''
   };

   if (!location) {
      const data = { id: payload.data.id, order: null, ...payload };
      const latestData = state.value.at(-1);

      data.order = latestData ? latestData.order + 1 : 1;
      state.value.push(data);
   }
}
