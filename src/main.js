import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createPinia  } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import '@/css/tailwind.css'
import 'flowbite';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(router).use(pinia).mount('#app')
