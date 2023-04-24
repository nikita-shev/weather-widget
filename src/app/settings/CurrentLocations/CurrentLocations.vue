<template>
   <article class="current-locations">
      <h3 class="current-locations__title">Cities:</h3>

      <div class="current-locations__wrap">
         <ul v-if="isNotEmpty" class="current-locations__list">
            <li
               v-for="{ country, city, data } of state"
               :key="data.id"
               class="current-locations__item"
               draggable="true"
               @dragstart="dragStartHandler($event, data.id)"
               @dragover.prevent="dragOverHandler"
               @dragleave="dragLeaveHandler"
               @drop="dropHandler($event, data.id)"
            >
               <div class="location">
                  <i-list class="location__img" />

                  <span class="location__data">{{ country }}, {{ city }}</span>

                  <button class="location__btn btn" @click="removeLocation(country, city)">
                     <i-remove class="location__btn-svg" />
                  </button>
               </div>
            </li>
         </ul>

         <p v-else class="current-locations__info">Пусто</p>
      </div>
   </article>
</template>

<script>
   import { ref, computed } from 'vue';
   import store from '@store';
   import IList from '@/app/settings/CurrentLocations/Icons/IList.vue';
   import IRemove from '@/app/settings/CurrentLocations/Icons/IRemove.vue';

   export default {
      name: 'CurrentLocations',

      components: {
         IList,
         IRemove
      },

      setup() {
         const { state, removeLocation, reverseLocation } = store;
         const locationIds = ref([]);
         const isNotEmpty = computed(() => Boolean(state.value.length));

         function dragStartHandler(e, id) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.dropEffect = 'move';

            locationIds.value.push(id);
         }

         function dragOverHandler(e) {
            e.currentTarget.style.backgroundColor = '#8080801c';
         }

         function dragLeaveHandler(e) {
            e.currentTarget.style.backgroundColor = '#ffffff';
         }

         function dropHandler(e, id) {
            locationIds.value.push(id);

            reverseLocation(locationIds);
            locationIds.value = [];

            e.currentTarget.style.backgroundColor = '#ffffff';
         }

         return {
            state,
            isNotEmpty,
            dragStartHandler,
            dragOverHandler,
            dragLeaveHandler,
            dropHandler,
            removeLocation
         };
      }
   };
</script>

<style scoped lang="sass" src="./CurrentLocations.sass"></style>
