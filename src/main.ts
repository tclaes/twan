import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/css/styles.css'
import router from './router'
import VueGtag from 'vue-gtag-next'

const app = createApp(App)

app.use(createPinia())
app.use(VueGtag, {
  property: { id: 'G-C95Q6RBFHH' },
})
app.use(router).mount('#app')
