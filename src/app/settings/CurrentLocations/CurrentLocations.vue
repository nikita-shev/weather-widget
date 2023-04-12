<template>
   <article class="current-locations">
      <h3 class="current-locations__title">Города:</h3>

      <div class="current-locations__wrap">
         <ul v-if="isNotEmpty" class="current-locations__list">
            <li
               v-for="{ country, city, data } of state"
               :key="data.id"
               class="current-locations__item"
            >
               <div class="location">
                  <i-list class="location__img" />

                  <span class="location__data">{{ country }}, {{ city }}</span>

                  <button class="location__btn btn">
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
   import { computed } from 'vue';
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
         const { state } = store;
         const isNotEmpty = computed(() => Boolean(state.value.length));

         return {
            state,
            isNotEmpty
         };
      }
   };
</script>

<style scoped lang="sass" src="./CurrentLocations.sass"></style>
