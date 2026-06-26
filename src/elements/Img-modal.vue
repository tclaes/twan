<template>
  <img
    :src="imgThumbnail.url ?? undefined"
    :alt="imgThumbnail.alt ?? undefined"
    width="200"
    height="300"
    @click="fullWidthImage = !fullWidthImage"
    loading="lazy"
  />
  <div
    v-show="fullWidthImage"
    :class="{ full: fullWidthImage }"
    @click="fullWidthImage = !fullWidthImage"
  >
    <img loading="lazy" :src="image.url ?? undefined" :alt="image.alt ?? undefined" />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import type { ImageField } from '@prismicio/client'

  const props = defineProps<{ image: ImageField<'thumbnail'> }>()

  const fullWidthImage = ref(false)
  const imgThumbnail = computed(() => props.image?.thumbnail ?? props.image)
</script>

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
