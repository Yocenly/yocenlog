import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
const aliasDir = fileURLToPath(new URL('./src', import.meta.url));
let BASE_URL = process.env.NODE_ENV === 'production' ? '/yocenlog/' : '/'
export default defineConfig({
  plugins: [
    vue()
  ],

  publicPath: BASE_URL,

  resolve: {
    alias: {  // 这里就是需要配置resolve里的别名
      "@": aliasDir
    }
  }
});
