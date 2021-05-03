import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      pageInfo: {},
      posts: {},
    };
  },
  mutations: {
    setPosts(state: any, payload) {
      state.posts = payload.posts;
      state.pageInfo = payload.pageInfo;
    },
    reversePosts(state) {
      state.posts = state.posts.reverse();
    },
  },
});

export default store;
