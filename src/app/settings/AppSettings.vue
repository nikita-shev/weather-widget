<template>
   <div class="settings">
      <current-locations />
      <new-location />
   </div>
</template>

<script>
   import CurrentLocations from '@/app/settings/CurrentLocations/CurrentLocations.vue';
   import NewLocation from '@/app/settings/NewLocation/NewLocation.vue';

   export default {
      name: 'AppSettings',

      components: {
         CurrentLocations,
         NewLocation
      }
   };
</script>

<style scoped lang="sass">
   .settings
     display: flex
     flex-direction: column
     gap: 15px
</style>
