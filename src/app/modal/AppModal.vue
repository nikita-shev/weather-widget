<template>
   <article :class="{ 'modal--active': isOpen }" class="modal">
      <div :class="{ 'modal--active': isOpen }" class="modal__container">
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
   import { ref, onBeforeMount } from 'vue';
   import ModalCloseBtn from '@/app/modal/ModalCloseBtn/ModalCloseBtn.vue';
   import ModalInfo from '@/app/modal/ModalInfo/ModalInfo.vue';

   export default {
      name: 'AppModal',

      components: {
         ModalCloseBtn,
         ModalInfo
      },

      emits: {
         'open:modal': (value) => typeof value === 'function'
      },

      setup(_, { emit }) {
         const isOpen = ref(false);

         const openModal = (value) => (isOpen.value = value);

         onBeforeMount(() => emit('open:modal', openModal));

         return {
            isOpen
         };
      }
   };
</script>

<style src="./AppModal.sass" lang="sass" scoped></style>
