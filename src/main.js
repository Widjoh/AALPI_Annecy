import { createApp } from 'vue'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import App from './App.vue'
import './index.css'
import router from './router'


const app = createApp(App).use(router);
app.use(Vue3Lottie)
app.mount('#app');

