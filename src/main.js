import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createPinia  } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import '@/css/tailwind.css'
import 'flowbite';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiChampions , GiSoccerField, RiTeamFill, FcDebian} from "oh-vue-icons/icons";


addIcons(GiChampions , GiSoccerField, RiTeamFill, FcDebian);

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(router).use(pinia).component("v-icon", OhVueIcon).mount('#app')
