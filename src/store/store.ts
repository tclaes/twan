import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      pageInfo: {},
      posts: {},
      sorting: 'DESC',
    }
  },
  mutations: {
    setPosts(state: any, payload) {
      state.posts = payload.posts
      state.pageInfo = payload.pageInfo
    },
    addPosts(state: any, payload) {
      state.posts = [...state.posts, ...payload.posts]
      state.pageInfo = payload.pageInfo
    },
    setSorting(state: any, payload) {
      state.sorting = payload
    },
  },
})

export default store
