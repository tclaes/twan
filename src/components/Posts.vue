<template>
  <div v-for="(post) in posts" :key="post.id">
    <Post :post="post" />
  </div>  
</template>

<script>
	import { getPosts } from "./../services/queries"
  import Post from "./Post.vue";

export default {
  data () {
    return {
      posts: {}
    };
  },
  components: {
    Post
  },
  methods: {
    async getContent() {
      await getPosts().then(response => this.posts = response);
    }
  },
  created () {
    this.getContent();
  }
}
</script>