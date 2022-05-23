import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        port: '8080',
        open: true
    },
    resolve: {
        /**
         * This is where you define your path shortcuts. 
         * Basically, you can abreviate your paths by defining an alias.
         */
        alias: {
            '@': path.resolve(__dirname, './src'),
            "@components": path.resolve(__dirname, "./src/components"),
            "@stores": path.resolve(__dirname, "./stores"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@scripts": path.resolve(__dirname, "./src/assets/scripts")
        }
    }
})