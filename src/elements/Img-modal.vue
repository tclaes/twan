<script setup lang="ts">
  import { ref } from 'vue'
  import { PrismicImage } from '@prismicio/vue'
  import type { ImageField } from '@prismicio/client'

  const props = defineProps<{ image: ImageField }>()

  const thumbnailField = (props.image as ImageField<'thumbnail'>).thumbnail ?? props.image

  const fullWidthImage = ref(false)
</script>

<template>
  <PrismicImage
    :field="thumbnailField"
    width="200"
    height="300"
    loading="lazy"
    @click="fullWidthImage = !fullWidthImage"
  />
  <div
    v-show="fullWidthImage"
    :class="{ full: fullWidthImage }"
    @click="fullWidthImage = !fullWidthImage"
  >
    <PrismicImage :field="props.image" loading="lazy" />
  </div>
</template>

<style lang="scss" scoped>
  img {
    --border-radius: 5px;
    border-radius: 0.2rem;
    cursor: pointer;
    height: auto;
    margin: 1rem 2rem 1rem 0;
    width: 200px;
    box-shadow: var(--border-radius) var(--border-radius) 0 0 rgba(186, 186, 186, 0.2);
  }

  .hidden {
    display: none;
  }

  .full {
    background: rgba(3, 3, 3, 0.25);
    cursor: pointer;
    display: grid;
    place-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    img {
      width: auto;
      margin: 1rem;
      max-height: 90vh;
      max-width: 90vw;
    }
  }
</style>
