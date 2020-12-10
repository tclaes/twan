const { createApp } = require('vue');
import App from "./App.vue";

import './assets/css/styles.css';
import './registerServiceWorker'

const app = createApp(App);

app.mount("#app");