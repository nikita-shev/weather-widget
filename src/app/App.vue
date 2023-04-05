<template>
   <div class="widget__container">
      <header v-if="false" class="widget__header header">
         <button class="header__btn header__btn--add btn"></button>
         <button class="header__btn header__btn--settings btn"></button>
      </header>

      <div v-if="true" class="widget__info info">
         <button class="info__btn info__btn--quick-setup btn">Настроить виджет</button>
      </div>
   </div>

   <app-modal></app-modal>
</template>

<script>
   import { defineAsyncComponent } from 'vue';

   export default {
      components: {
         AppModal: defineAsyncComponent(() => import('@/app/modal/AppModal.vue'))
      }
   };
</script>

<style scoped lang="sass">
   .widget__container
     width: 100%
     height: 100%


   .widget__header
     margin-bottom: 10px

   .header
     display: flex
     justify-content: space-between
     width: 100%

   .header__btn
     width: 25px
     height: 25px
     background-size: cover
     opacity: 0.7

   .header__btn--add
     background-image: url('@/assets/images/icons/add-btn.svg')

   .header__btn--settings
     background-image: url('@/assets/images/icons/settings-btn.svg')


   .info
     display: flex
     width: 100%
     min-height: 60vh

   .info__btn
     margin: auto
     padding: 10px 15px
     font-size: 14px
     letter-spacing: 1px
     border-radius: 4px
     color: rgba(0, 0, 0, 0.87)

   .info__btn--quick-setup
     box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12)
     transition: box-shadow 300ms cubic-bezier(.4, 0, .2, 1)

     &:hover
       box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12)
</style>
