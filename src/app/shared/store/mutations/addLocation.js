export default function ADD_LOCATION(state, payload) {
   const location = state.find((item) => item.data.id === payload.data.id);

   if (!location) {
      const data = { id: payload.data.id, order: null, ...payload };
      const latestData = state.at(-1);

      data.order = latestData ? latestData.order + 1 : 1;
      state.push(data);
   }
}
