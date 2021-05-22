<template>
  <section class="gallery">
    <div v-for="img in imgGallery" :key="img.url">
      <Img :image="img.gallery_image" />
    </div>
  </section>
</template>

<script>
  import Img from "./../elements/Img-modal";

  export default {
    components: {
      Img,
    },
    props: {
      imgGallery: Array,
    },
    data() {
      return {}
    },
  }
</script>

<style scoped lang="scss">
  .gallery {
    display: flex;
    flex-wrap: wrap;
  }
</style>
