<template>
  <section class="post-header">
    <h2>{{ post.title[0].text }}</h2>
    <div class="date">{{ post.creation_date }}</div>
  </section>
  <div class="columns">
    <div v-if="post.image" class="image">
      <Img v-bind:image="img" />
    </div>
    <div v-html="content" class="content"></div>
  </div>
  <div v-if="post.body">
    <ImageGallery v-bind:imgGallery="imgGallery" />
  </div>
</template>

<script>
import linkResolver from "./../prismic/link-resolver";
import PrismicDOM from "prismic-dom";
import Img from "./../elements/Img-modal";
import ImageGallery from "@/components/ImageGallery";

export default {
  components: {
    ImageGallery,
    Img
  },
  props: {
    post: Object
  },
  computed: {
    content() {
      return PrismicDOM.RichText.asHtml(this.post.content, linkResolver);
    },
    img() {
      return this.post.image;
    },
    imgGallery() {
      return this.post.body ? this.post.body[0].fields : null;
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  color: #333;
  font-family: "Little Dinosaur", serif;
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
