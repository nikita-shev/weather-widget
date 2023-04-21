<template>
   <article class="card">
      <header class="card__card-header card-header">
         <div class="card-header__wrap">
            <img
               :src="`https://flagcdn.com/16x12/${countryCode}.webp`"
               :alt="country"
               class="card-header__img"
            />

            <h2 class="card-header__title">{{ country }}, {{ city }}</h2>
         </div>

         <remove-card-btn class="card-header__btn" @click="removeLocation(country, city)" />
      </header>

      <div class="card__weather-data weather-data">
         <div class="weather-data__temp temp">
            <div class="temp__info">
               <img
                  :src="`https://openweathermap.org/img/wn/${weather.icon}@2x.png`"
                  class="temp__img"
                  alt="Температура"
               />

               <p class="temp__text">{{ temp }}°C</p>
            </div>

            <div class="temp__notes">
               <p class="temp__feels-like">Ощущается как {{ feelsLike }}°C.</p>
               <p class="temp__clouds">{{ weather.description }}.</p>
            </div>
         </div>

         <div class="weather-data__other-data other-data">
            <div class="other-data__wrap">
               <i-pressure class="other-data__img" />
               <span class="other-data__text">{{ pressure }} мм рт.ст.</span>
            </div>

            <div class="other-data__wrap">
               <i-humidity class="other-data__img" />
               <span class="other-data__text">{{ humidity }} %</span>
            </div>

            <div class="other-data__wrap">
               <i-visibility class="other-data__img" />
               <span class="other-data__text">{{ visibility }} км</span>
            </div>

            <div class="other-data__wrap">
               <i-wind-speed class="other-data__img" />
               <span class="other-data__text">{{ windSpeed }} м/с</span>
            </div>
         </div>
      </div>

      <img :src="bgUrl" :alt="weather.main" class="card__bg" />
   </article>
</template>

<script>
   import RemoveCardBtn from '@/app/card/RemoveCardBtn/RemoveCardBtn.vue';
   import IPressure from '@/app/card/Icons/IPressure.vue';
   import IHumidity from '@/app/card/Icons/IHumidity.vue';
   import IVisibility from '@/app/card/Icons/IVisibility.vue';
   import IWindSpeed from '@/app/card/Icons/IWindSpeed.vue';
   import { computed, toRefs } from 'vue';
   import store from '@store';

   export default {
      name: 'AppCard',

      components: {
         IPressure,
         IHumidity,
         IVisibility,
         IWindSpeed,
         RemoveCardBtn
      },

      props: {
         weatherData: {
            type: Object,
            required: true,
            default() {
               return { data: { weather: {}, main: {} } };
            }
         }
      },

      setup(props) {
         const { country, city, data } = toRefs(props.weatherData);
         const countryCode = data.value.sys.country.toLowerCase();
         const { removeLocation } = store;

         const temp = Math.round(data.value.main.temp);
         const feelsLike = Math.round(data.value.main.feels_like);
         const pressure = Math.round(data.value.main.pressure * 0.750064);
         const visibility = data.value.visibility / 1000;

         const bgUrl = computed(
            () =>
               new URL(
                  `/src/assets/images/weather/${data.value.weather[0].main.toLowerCase()}.jpg`,
                  import.meta.url
               ).pathname
         );

         return {
            bgUrl,
            country,
            countryCode,
            city,
            weather: data.value.weather[0],
            temp,
            feelsLike,
            pressure,
            humidity: data.value.main.humidity,
            visibility,
            windSpeed: data.value.wind.speed,
            removeLocation
         };
      }
   };
</script>

<style scoped lang="sass" src="./AppCard.sass"></style>
