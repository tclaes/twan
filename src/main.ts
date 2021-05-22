const { createApp } = require('vue')
import App from './App.vue'

import './assets/css/styles.css'
import './registerServiceWorker'
import router from './router'
import VueGtag from 'vue-gtag-next'
import store from './store/store'

const app = createApp(App)

app.use(VueGtag, {
  property: { id: 'G-C95Q6RBFHH' },
})

app.use(store)
app.use(router).mount('#app')
