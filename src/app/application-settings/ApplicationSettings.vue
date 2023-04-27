<template>
   <div class="settings">
      <button class="settings__btn settings__btn--save btn">
         <i-save />
      </button>

      <div class="settings__wrap">
         <label class="settings__label">
            <input class="settings__checkbox" type="checkbox" />
            <span class="settings__label-text">Widget vertical alignment</span>
         </label>

         <label class="settings__label">
            <input class="settings__checkbox" type="checkbox" />
            <span class="settings__label-text">Remove background</span>
         </label>

         <div class="settings__widget-width widget-width">
            <span class="widget-width__text">Container size:</span>
            <input class="widget-width__input input" type="text" value="320px" />
         </div>
      </div>
   </div>
</template>

<script>
   import ISave from '@/app/application-settings/Icons/ISave.vue';

   export default {
      name: 'ApplicationSettings',

      components: {
         ISave
      }
   };
</script>

<style src="./ApplicationSettings.sass" scoped lang="sass"></style>
