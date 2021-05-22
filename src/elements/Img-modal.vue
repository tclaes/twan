<template>
  <img
    :src="img_thumbnail.url"
    :alt="img_thumbnail.alt"
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
    <img loading="lazy" :src="img.url" :alt="img.alt" />
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        fullWidthImage: false,
      }
    },
    props: {
      image: Object,
    },
    computed: {
      img() {
        return this.image
      },
      img_thumbnail() {
        return this.image.thumbnail ? this.image.thumbnail : this.image
      },
    },
  }
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
