import './assets/main.css'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueTheMask from 'vue-the-mask'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ToastPlugin)
app.use(VueTheMask)
app.mount('#app')
