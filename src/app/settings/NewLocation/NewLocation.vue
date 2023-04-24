<template>
   <article class="new-location">
      <h3 class="new-location__title">Add city:</h3>

      <div class="new-location__wrap">
         <input
            v-model="country"
            class="new-location__input input"
            type="text"
            placeholder="Country"
         />
         <input v-model="city" class="new-location__input input" type="text" placeholder="City" />

         <p v-if="error.status" class="new-location__error">{{ error.message }}</p>
      </div>

      <button class="new-location__btn btn" @click="addLocation(country.trim(), city.trim())">Add</button>
   </article>
</template>

<script>
   import { ref, watch } from 'vue';
   import store from '@store';

   export default {
      name: 'NewLocation',

      setup() {
         const country = ref('');
         const city = ref('');
         const { error, addLocation } = store;

         watch(error, (error) => {
            if (!error.status) {
               country.value = '';
               city.value = '';
            }
         });

         return {
            country,
            city,
            error,
            addLocation
         };
      }
   };
</script>

<style scoped lang="sass" src="./NewLocation.sass"></style>
