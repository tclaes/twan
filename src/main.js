const { createApp } = require('vue');
import App from "./App.vue";

import './assets/css/styles.css';
import './registerServiceWorker';
import router from './router';

const app = createApp(App);

app.use(router).mount("#app");