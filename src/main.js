import { createApp } from 'vue'
import router from './router/index.js'
import { createPinia } from 'pinia'

import App from './App.vue'

const pinia = createPinia()
const vm = createApp(App)

vm.use(pinia)
vm.use(router);
vm.mount("#app");