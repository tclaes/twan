<template>
  <div class="pagination">
    <a @click="postsStore.loadMore()" v-if="postsStore.hasNextPage">Meer berichten</a>
  </div>
</template>

<script setup lang="ts">
  import { usePostsStore } from '@/store/posts'

  const postsStore = usePostsStore()
</script>

<style scoped>
  .pagination {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  a {
    border: 1px solid #333;
    cursor: pointer;
    padding: 0.5rem 1.2rem;
  }
</style>
