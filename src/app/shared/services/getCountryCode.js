import lookup from 'country-code-lookup';

export default function getCountryCode(country) {
   const location = lookup.byCountry(country);

   return {
      countryCode: location?.iso3 || null,
      status: Boolean(location)
   };
}
