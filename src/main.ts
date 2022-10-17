import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-plus'
import 'element-plus/dist/index.css'

import '../src/assets/styles/common.less'

createApp(App).use(Element).use(store).use(router).mount('#app')
