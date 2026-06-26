<script setup lang="ts">
  import { ref } from 'vue'
  import { PrismicImage } from '@prismicio/vue'
  import type { ImageField } from '@prismicio/client'

  const props = defineProps<{ image: ImageField }>()

  const thumbnailField = (props.image as ImageField<'thumbnail'>).thumbnail ?? props.image

  const fullWidthImage = ref(false)
</script>

<template>
  <button class="thumbnail-btn" @click="fullWidthImage = true">
    <PrismicImage :field="thumbnailField" width="200" height="300" loading="lazy" />
  </button>
  <dialog :open="fullWidthImage" class="full" @click.self="fullWidthImage = false">
    <button class="close-btn" aria-label="Close image" @click="fullWidthImage = false">
      &#x2715;
    </button>
    <PrismicImage :field="props.image" loading="lazy" />
  </dialog>
</template>

<style lang="scss" scoped>
  .thumbnail-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    img {
      --border-radius: 5px;
      border-radius: 0.2rem;
      height: auto;
      margin: 1rem 2rem 1rem 0;
      width: 200px;
      box-shadow: var(--border-radius) var(--border-radius) 0 0 rgba(186, 186, 186, 0.2);
    }
  }

  .full {
    background: rgba(3, 3, 3, 0.25);
    border: none;
    display: grid;
    place-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;

    img {
      width: auto;
      margin: 1rem;
      max-height: 90vh;
      max-width: 90vw;
    }
  }

  .close-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
</style>
