<template>
    <img 
      :src="img_thumbnail.url" 
      :alt="img_thumbnail.alt"
      width="200" 
      @click="fullWidthImage = !fullWidthImage"
    >
    <div v-if="fullWidthImage" :class="{ full: fullWidthImage }" @click="fullWidthImage = !fullWidthImage">
      <img
        :src="img.url" 
        :alt="img.alt"
      >
    </div>

</template>

<script>
export default {
  data: function() {
    return {
    fullWidthImage: false
  };
},
  props: {
    image: Object
  },
  computed: {
    img() {
      return this.image
    },
    img_thumbnail() {
      return this.image.thumbnail? this.image.thumbnail : this.image
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    border-radius: .5rem;
    cursor: pointer;
    margin: 1rem 2rem;
    width: 200px;
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
      height: 90vh;
      width: auto;
    }
  }
</style>