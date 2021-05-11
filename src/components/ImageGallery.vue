<template>
  <section class="gallery">
    <div v-for="img in imgGallery" v-bind:key="img.url">
      <Img v-bind:image="img.gallery_image" />
    </div>
  </section>
</template>

<script>
import Img from "./../elements/Img-modal";

export default {
  data() {
    return {};
  },
  components: {
    Img
  },
  props: {
    imgGallery: Array
  }
};
</script>

<style scoped lang="scss">
.gallery {
  display: flex;
}
</style>
