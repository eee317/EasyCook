import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { VueMasonryPlugin } from 'vue-masonry'
import Loading from 'vue-loading-overlay'
import loadingPage from '@/components/loadingPage.vue'
import 'vue-loading-overlay/dist/vue-loading.css'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.use(pinia)
app.use(VueMasonryPlugin)
app.component('loadingPage', loadingPage)
app.component('LoadingTool', Loading)
app.mount('#app')
