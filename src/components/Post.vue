<template>
  <section class="post-header">
    <h2>{{ asText(post.title) }}</h2>
    <div class="date">{{ post.creation_date }}</div>
  </section>
  <div class="columns">
    <div v-if="post.image" class="image">
      <ImgModal :image="post.image" />
    </div>
    <div class="content" v-html="content"></div>
  </div>
  <div v-if="post.body">
    <ImageGallery :img-gallery="imgGallery" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { asHTML, asText } from '@prismicio/client'
  import linkResolver from './../prismic/link-resolver'
  import ImgModal from './../elements/Img-modal.vue'
  import ImageGallery from '@/components/ImageGallery.vue'
  import type { PostData } from '@/store/posts'

  const props = defineProps<{ post: PostData }>()

  const content = computed(() => asHTML(props.post.content, linkResolver))
  const imgGallery = computed(() => props.post.body?.[0]?.fields ?? null)
</script>

<style lang="scss" scoped>
  h2 {
    color: #333;
    font-family: 'Little Dinosaur', serif;
    margin: 0;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .date {
    font-size: 0.8rem;
    font-style: italic;
  }

  .post-header {
    display: flex;
    justify-content: space-between;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
  }

  .content {
    flex: 1 1 70%;
  }
</style>
