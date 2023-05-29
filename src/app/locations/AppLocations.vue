<template>
   <div class="locations">
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
   .locations
     display: flex
     flex-direction: column
     gap: 15px

   .v-align .locations
     height: 85%
     overflow-y: auto
</style>
