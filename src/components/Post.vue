<template>
  <h2>{{post.node.title[0].text}}</h2>
  <div class="columns">
    
    <div v-if="post.node.image" class="image">
      <img :src="img.url" :alt="img.alt" width="200">
    </div>
    <div v-html="content"></div>
  </div>
  
</template>

<script>
  import linkResolver from "./../prismic/link-resolver";
  import PrismicDOM from 'prismic-dom';

  export default {
    props: {
      post: Object
    },
    computed: {
      content() {
          return PrismicDOM.RichText.asHtml(this.post.node.content, linkResolver);
      },
      img() {
        return this.post.node.image
      }
    }
  }
</script>

<style lang="scss" scoped>
	h2 {
		color: #333;
    font-family: "Little Dinosaur";
		margin: 0;
		font-size: 1.6rem;
		font-weight: bold;
	}
  .columns{
    display: flex;
  }
  .image img {
    padding-right: 3rem;
    margin: 1rem;
    width: 200px;
  }
</style>