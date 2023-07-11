import { createApp } from 'vue'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import App from './App.vue'
import './index.css'
import router from './router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import Notifications from '@kyvg/vue3-notification'


const app = createApp(App).use(router);
app.use(Vue3Lottie)
app.use(Notifications)
app.use(autoAnimatePlugin)
app.mount('#app');

