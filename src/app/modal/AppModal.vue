<template>
   <focus-trap v-model:active="modalData.isOpen">
      <article
         :class="{ 'modal--active': modalData.isOpen }"
         class="modal"
         @click.self="closeModal(false)"
      >
         <div
            :class="{ 'modal--active': modalData.isOpen }"
            :data-container="modalData.component"
            class="modal__container"
         >
            <header class="modal-header">
               <h2 class="modal-header__title">{{ title }}</h2>

               <modal-close-btn class="modal-header__btn" @click="closeModal(false)" />
            </header>

            <slot name="settings">
               <keep-alive>
                  <component :is="modalData.component" />
               </keep-alive>
            </slot>
         </div>
      </article>
   </focus-trap>
</template>

<script>
   import { ref, onBeforeMount, computed } from 'vue';
   import { FocusTrap } from 'focus-trap-vue';
   import ModalCloseBtn from '@/app/modal/ModalCloseBtn/ModalCloseBtn.vue';
   import AppLocations from '@/app/locations/AppLocations.vue';
   import AppSettings from '@/app/settings/AppSettings.vue';

   export default {
      name: 'AppModal',

      components: {
         FocusTrap,
         ModalCloseBtn,
         AppLocations,
         AppSettings
      },

      emits: {
         'open:modal': (value) => typeof value === 'function'
      },

      setup(_, { emit }) {
         const modalData = ref({ isOpen: false, component: 'AppLocations' });

         const title = computed(() =>
            modalData.value.component === 'AppLocations' ? 'Add Location' : 'Settings'
         );

         const openModal = (value) => (modalData.value = { isOpen: true, component: value });
         const closeModal = (value) => (modalData.value.isOpen = value);

         onBeforeMount(() => emit('open:modal', openModal));

         return {
            modalData,
            title,
            closeModal
         };
      }
   };
</script>

<style src="./AppModal.sass" lang="sass" scoped></style>
