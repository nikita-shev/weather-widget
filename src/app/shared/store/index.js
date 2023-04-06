import { ref, readonly } from 'vue';

const state = ref([]);
const readonlyState = readonly(state);

const actions = {};

const initStore = () => {
   state.value = JSON.parse(localStorage.getItem('WeatherData')) || [];
};
initStore();

export default {
   state: readonlyState
};
