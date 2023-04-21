export default function REVERSE_LOCATION({ state }, payload) {
   const [firstElem, secondElem] = payload;
   [firstElem.order, secondElem.order] = [secondElem.order, firstElem.order];

   state.value.sort((a, b) => a.order - b.order);
}
