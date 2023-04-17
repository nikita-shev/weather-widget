import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [vue()],
   resolve: {
      alias: [
         { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
         {
            find: '@use',
            replacement: fileURLToPath(new URL('./src/app/shared/use', import.meta.url))
         },
         {
            find: '@store',
            replacement: fileURLToPath(new URL('./src/app/shared/store', import.meta.url))
         },
         {
            find: '@services',
            replacement: fileURLToPath(new URL('./src/app/shared/services', import.meta.url))
         }
      ]
   }
});
