<template>
  <section class="gallery">
    <div v-for="(item, i) in imgGallery" :key="i">
      <ImgModal :image="item.gallery_image" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import ImgModal from './../elements/Img-modal.vue'
  import type { ImageField } from '@prismicio/client'

  defineProps<{
    imgGallery: Array<{ gallery_image: ImageField }> | null
  }>()
</script>

<style scoped lang="scss">
  .gallery {
    display: flex;
    flex-wrap: wrap;
  }
</style>
