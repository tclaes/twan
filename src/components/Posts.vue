<template>
  <Sorting class="sorting"></Sorting>
  <article v-for="post in posts" :key="post.id" class="post">
    <Post :post="post.node" />
  </article>
  <Pagination />
</template>

<script>
  import { getPosts } from '@/services/queries'
  import Post from './Post.vue'
  import Sorting from './../elements/Sort-posts'
  import Pagination from './../elements/Pagination'

  export default {
    components: {
      Post,
      Sorting,
      Pagination,
    },
    data() {
      return {}
    },
    computed: {
      posts() {
        return this.$store.state.posts
      },
    },
    created() {
      this.getContent()
    },
    methods: {
      getContent() {
        getPosts().then((response) => {
          this.$store.commit('setPosts', response)
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .post {
    margin: 2rem 0;
  }

  .sorting {
    display: flex;
    justify-content: flex-end;
    margin: 1rem 0;
  }
</style>
