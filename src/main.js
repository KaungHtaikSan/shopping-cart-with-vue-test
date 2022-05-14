import {
    createApp
} from 'vue'
import App from './App'
import router from './route/index'

createApp(App).use(router).mount('#app')