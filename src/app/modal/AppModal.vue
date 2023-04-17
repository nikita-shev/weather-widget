<template>
   <focus-trap v-model:active="isOpen">
      <article :class="{ 'modal--active': isOpen }" class="modal" @click.self="closeModal(false)">
         <div :class="{ 'modal--active': isOpen }" class="modal__container">
            <header class="modal-header">
               <h2 class="modal-header__title">Настройки виджета</h2>

               <modal-close-btn class="modal-header__btn" @click="closeModal(false)" />
            </header>

            <slot name="settings">
               <app-settings />
            </slot>
         </div>
      </article>
   </focus-trap>
</template>

<script>
   import { ref, onBeforeMount, defineAsyncComponent } from 'vue';
   import { FocusTrap } from 'focus-trap-vue';
   import ModalCloseBtn from '@/app/modal/ModalCloseBtn/ModalCloseBtn.vue';

   export default {
      name: 'AppModal',

      components: {
         FocusTrap,
         ModalCloseBtn,
         AppSettings: defineAsyncComponent(() => import('@/app/settings/AppSettings.vue'))
      },

      emits: {
         'open:modal': (value) => typeof value === 'function'
      },

      setup(_, { emit }) {
         const isOpen = ref(false);

         const openModal = (value) => (isOpen.value = value);
         const closeModal = (value) => (isOpen.value = value);

         onBeforeMount(() => emit('open:modal', openModal));

         return {
            isOpen,
            closeModal
         };
      }
   };
</script>

<style src="./AppModal.sass" lang="sass" scoped></style>
