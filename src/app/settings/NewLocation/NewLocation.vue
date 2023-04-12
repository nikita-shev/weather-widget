<template>
   <article class="new-location">
      <h3 class="new-location__title">Добавить город:</h3>

      <div class="new-location__wrap">
         <input
            v-model="country"
            class="new-location__input input"
            type="text"
            placeholder="Страна"
         />
         <input v-model="city" class="new-location__input input" type="text" placeholder="Город" />

         <p v-if="false" class="new-location__error">error.message</p>
      </div>

      <button class="new-location__btn btn">Добавить</button>
   </article>
</template>

<script>
   import { ref } from 'vue';

   export default {
      name: 'NewLocation',

      setup() {
         const country = ref('');
         const city = ref('');

         return {
            country,
            city
         };
      }
   };
</script>

<style scoped lang="sass" src="./NewLocation.sass"></style>
