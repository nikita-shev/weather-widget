<template>
   <article class="modal">
      <div class="modal__container">
         <header class="modal-header">
            <h2 class="modal-header__title">Настройки виджета</h2>

            <modal-close-btn class="modal-header__btn" />
         </header>

         <slot name="settings">
            <modal-info />
         </slot>
      </div>
   </article>
</template>

<script>
   import ModalCloseBtn from '@/app/modal/ModalCloseBtn/ModalCloseBtn.vue';
   import ModalInfo from '@/app/modal/ModalInfo/ModalInfo.vue';

   export default {
      name: 'AppModal',

      components: {
         ModalCloseBtn,
         ModalInfo
      }
   };
</script>

<style src="./AppModal.sass" lang="sass" scoped></style>
