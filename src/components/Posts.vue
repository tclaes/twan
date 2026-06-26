<template>
  <Sorting class="sorting" />
  <article v-for="post in postsStore.posts" :key="post.uid" class="post">
    <Post :post="post" />
  </article>
  <Pagination />
</template>

<script setup lang="ts">
  import { usePostsStore } from '@/store/posts'
  import Post from './Post.vue'
  import Sorting from './../elements/Sort-posts.vue'
  import Pagination from './../elements/Pagination.vue'

  const postsStore = usePostsStore()
  postsStore.fetchPosts()
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
