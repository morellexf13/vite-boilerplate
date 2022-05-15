/**
 * 🪴 Application entry point.
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from '../router.js'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist' 
import { useStore } from '../stores/index'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)
app.use(router)

router.beforeEach((from, to, next) => {
    // ✅ Check if user has logged in to decide if we should show the login page or not.
    const store = useStore(pinia)
    if (from.name != 'login' && !store.userIsLoggedIn){
        next({
            path: 'login',
            replace: true
        })
    } else {
        next();
    }
  })

app.mount('#app')
