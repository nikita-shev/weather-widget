<template>
   <button class="btn">
      <svg
         viewBox="0 0 36 36"
         version="1.1"
         preserveAspectRatio="xMidYMid meet"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
      >
         <title>Close modal window</title>
         <path
            d="M19.41,18l7.29-7.29a1,1,0,0,0-1.41-1.41L18,16.59,10.71,9.29a1,1,0,0,0-1.41,1.41L16.59,18,9.29,25.29a1,1,0,1,0,1.41,1.41L18,19.41l7.29,7.29a1,1,0,0,0,1.41-1.41Z"
            class="clr-i-outline clr-i-outline-path-1"
         ></path>
         <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
      </svg>
   </button>
</template>

<script>
   export default {
      name: 'ModalCloseBtn'
   };
</script>

<style scoped lang="sass">
   .modal-header__btn
     width: 20px
     height: 20px

     & svg
       fill: var(--m-header-color)
</style>
