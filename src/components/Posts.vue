<template>
  <Sorting class="sorting"></Sorting>
  <div v-for="(post) in posts" :key="post.id">
    <Post :post="post.node" />
  </div>  
</template>

<script>
	import { getPosts } from "./../services/queries"
  import Post from "./Post.vue";
  import Sorting from "./../elements/Sort-posts"

export default {
  data () { return {}
  },
  components: {
    Post,
    Sorting
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {
    getContent() {
      getPosts().then(response => {
        this.$store.commit('setPosts', response)
      });
    }
  },
  created () {
    this.getContent();
  }
}
</script>

<style scoped lang="scss">
  .sorting {
    display: flex;
    justify-content: flex-end;
    margin: 1rem 0;
  }
</style>