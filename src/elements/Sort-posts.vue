<template>
  <div id="sorting">
    <select name="posts" id="posts" @change="onChange($event)">
      <option value="ASC">Oudste bericht eerst</option>
      <option value="DESC" selected>Nieuwste bericht eerst</option>
    </select>
  </div>
</template>

<script setup lang="ts">
  import { usePostsStore } from '@/store/posts'

  const postsStore = usePostsStore()

  function onChange(e: Event) {
    postsStore.setSorting((e.target as HTMLSelectElement).value)
  }
</script>

<style lang="scss" scoped>
  select {
    padding: 0.5rem;
  }
</style>
