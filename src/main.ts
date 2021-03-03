const { createApp } = require('vue');
import { createStore } from 'vuex'
import App from "./App.vue";

import './assets/css/styles.css';
import './registerServiceWorker';
import router from './router';
import VueGtag from "vue-gtag-next";

const app = createApp(App);

const store = createStore({
  state() {
    return {
      posts: {}
    }
  },
  mutations: {
    setPosts (state:any, payload) {
      state.posts = payload;
    },
    reversePosts (state) {
      state.posts = state.posts.reverse();
    }
  }
});

app.use(VueGtag, {
  property: { id: "G-C95Q6RBFHH" }
});

app.use(store);
app.use(router).mount("#app");
