<template>
   <div class="settings">
      <current-locations />
      <new-location />
   </div>
</template>

<script>
   import CurrentLocations from '@/app/locations/CurrentLocations/CurrentLocations.vue';
   import NewLocation from '@/app/locations/NewLocation/NewLocation.vue';

   export default {
      name: 'AppLocations',

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

   .v-align .settings
     height: 85%
     overflow-y: auto
</style>
