<template>
   <article class="modal">
      <div class="modal__container">
         <header class="modal-header">
            <h2 class="modal-header__title">Настройки виджета</h2>

            <button class="modal-header__btn btn"></button>
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
   export default {
      name: 'AppModal'
   };
</script>

<style src="./AppModal.sass" lang="sass" scoped></style>
