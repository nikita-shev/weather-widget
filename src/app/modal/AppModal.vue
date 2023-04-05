<template>
   <article class="modal">
      <div class="modal__container">
         <header class="modal-header">
            <h2 class="modal-header__title">Настройки виджета</h2>

            <modal-close-btn class="modal-header__btn" />
         </header>

         <slot name="settings">
            <div class="modal-info">
               <p class="modal-info__text"><span>404</span> not found</p>
            </div>
         </slot>
      </div>
   </article>
</template>

<script>
   import ModalCloseBtn from '@/app/modal/ModalCloseBtn/ModalCloseBtn.vue';

   export default {
      name: 'AppModal',

      components: {
         ModalCloseBtn
      }
   };
</script>

<style src="./AppModal.sass" lang="sass" scoped></style>
