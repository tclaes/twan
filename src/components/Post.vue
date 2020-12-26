<template>
  <section class="post-header">
    <h2>{{post.title[0].text}}</h2>
    <div class="date">{{post.creation_date}}</div>
  </section>
  <div class="columns">
    
    <div v-if="post.image" class="image">
      <img :src="img_thumbnail.url" :alt="img_thumbnail.alt" width="200">
    </div>
    <div v-html="content" class="content"></div>
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
        return PrismicDOM.RichText.asHtml(this.post.content, linkResolver);
      },
      img() {
        return this.post.image
      },
      img_thumbnail() {
        return this.post.image.thumbnail? this.post.image.thumbnail : this.post.image
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
  .date {
    font-size: 0.8rem;
    font-style: italic;
  }
  .post-header {
    display: flex;
    justify-content: space-between;
  }
  .columns{
    display: flex;
    flex-wrap: wrap;
  }
  .content {
    flex: 1 1 70%;
  }
  .image img {
    border-radius: .5rem;
    margin: 1rem 2rem;
    width: 200px;
  }
</style>