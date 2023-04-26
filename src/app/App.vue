<template>
   <div class="widget__container">
      <header v-if="weatherData.length" class="widget__header header">
         <button class="header__btn header__btn--add btn" @click="openModal(true)"></button>
         <button v-if="false" class="header__btn header__btn--settings btn"></button>
      </header>

      <div class="widget__wrap">
         <div class="widget__cards cards">
            <app-card v-for="item of weatherData" :key="item.id" :weather-data="item" />
         </div>

         <div v-if="!weatherData.length" class="widget__info info">
            <button class="info__btn info__btn--quick-setup btn" @click="openModal(true)">
               Settings
            </button>
         </div>
      </div>
   </div>

   <app-modal @open:modal="setModalMethod"></app-modal>
</template>

<script>
   import { ref, defineAsyncComponent } from 'vue';
   import store from '@store';

   export default {
      components: {
         AppCard: defineAsyncComponent(() => import('@/app/card/AppCard.vue')),
         AppModal: defineAsyncComponent(() => import('@/app/modal/AppModal.vue'))
      },

      setup() {
         const { state } = store;
         const openModal = ref(null);
         const setModalMethod = (fn) => (openModal.value = fn);

         return {
            weatherData: state,
            openModal,
            setModalMethod
         };
      }
   };
</script>

<style scoped lang="sass">
   .widget__container
     width: 100%
     height: 100%


   .header
     display: flex
     justify-content: space-between
     width: 100%
     padding: 10px 10px 5px

   .header__btn
     width: 20px
     height: 20px
     background-size: cover
     opacity: 0.7

   .header__btn--add
     background-image: url('@/assets/images/icons/add-btn.svg')

   .header__btn--settings
     background-image: url('@/assets/images/icons/settings-btn.svg')


   .widget__wrap
     height: 70vh
     padding: 5px 10px 10px
     overflow-y: auto


   .cards
     display: flex
     flex-direction: column
     row-gap: 10px


   .info
     display: flex
     width: 100%
     height: 100%

   .info__btn
     margin: auto
     padding: 10px 15px
     font-size: 14px
     letter-spacing: 1px
     border-radius: 4px
     color: var(--text-primary)

   .info__btn--quick-setup
     box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12)
     transition: box-shadow 300ms cubic-bezier(.4, 0, .2, 1)

     &:hover
       box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12)
</style>
