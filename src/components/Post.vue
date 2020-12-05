<template>
  <h2>{{post.node.title[0].text}}</h2>
  <div v-html="content"></div>
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
      }
    }
  }
</script>

<style lang="scss" scoped>
	h2 {
		color: #333;
    font-family: "Little Dinosaur";
		margin: 0;
		font-size: 2rem;
		font-weight: normal;
	}
</style>