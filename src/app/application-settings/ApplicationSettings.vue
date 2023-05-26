<template>
   <div class="settings">
      <button class="settings__btn settings__btn--save btn">
         <i-save />
      </button>

      <div class="settings__wrap">
         <label class="settings__label">
            <input v-model="verticalPosition" class="settings__checkbox" type="checkbox" />
            <span class="settings__label-text">Widget vertical position</span>
         </label>

         <label class="settings__label">
            <input v-model="background" class="settings__checkbox" type="checkbox" />
            <span class="settings__label-text">Add background</span>
         </label>

         <div class="settings__widget-width widget-width">
            <span class="widget-width__text">Container width:</span>
            <input v-model="containerWidth" class="widget-width__input input" type="text" />

            <button class="settings__btn btn" @click="createContainerWidth(containerWidth)">
               <i-save />
            </button>
         </div>
      </div>
   </div>
</template>

<script>
   import useAlignment from '@/app/application-settings/use/useAlignment.js';
   import useBackground from '@/app/application-settings/use/useBackground.js';
   import useContainerWidth from '@/app/application-settings/use/useContainerWidth.js';
   import ISave from '@/app/application-settings/Icons/ISave.vue';

   export default {
      name: 'ApplicationSettings',

      components: {
         ISave
      },

      setup() {
         const { verticalPosition } = useAlignment();
         const { background } = useBackground();
         const { containerWidth, createContainerWidth } = useContainerWidth();

         return {
            verticalPosition,
            background,
            containerWidth,
            createContainerWidth
         };
      }
   };
</script>

<style src="./ApplicationSettings.sass" scoped lang="sass"></style>
