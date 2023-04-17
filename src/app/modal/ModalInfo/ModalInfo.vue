<template>
   <div class="modal-info">
      <p class="modal-info__text"><span>404</span> not found</p>
   </div>
</template>

<script>
   export default {
      name: 'ModalInfo'
   };
</script>

<style scoped lang="sass">
   .modal-info
     display: flex
     width: 100%
     padding: 30px 10px

   .modal-info__text
     margin: auto
     font-size: 17px
     font-style: italic
     color: #666666

     & span
       font-weight: 700
       font-style: inherit
       color: inherit
</style>
