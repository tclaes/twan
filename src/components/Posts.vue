<template>
  <div v-for="(post) in posts" :key="post.id">
    <Post :post="post" />
  </div>  
</template>

<script>
	import { PrismicLink } from "apollo-link-prismic";
	import { InMemoryCache } from "apollo-cache-inmemory";
	import ApolloClient from "apollo-client";
  import gql from "graphql-tag";
  import linkResolver from "./../prismic/link-resolver";
  import PrismicDOM from 'prismic-dom';
  import Post from "./Post.vue";

	const client = new ApolloClient({
		link: PrismicLink({
			uri: "https://twanclaes.prismic.io/graphql",
		}),
		cache: new InMemoryCache()
	});

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
      await client.query({
				query: gql`
					query {
						allPosts {
							edges {
								node {
									title,
                  content
								}
							}
						}
					}
				`
			}).then(response => {
        this.posts = response.data.allPosts.edges;
        console.log(this.posts);
			}).catch(error => {
				console.error(error);
			});
    },
    content(index){
      if (this.posts){
        return PrismicDOM.RichText.asHtml(this.posts[index].node.content, linkResolver);
      }
    }
  },
  created () {
    this.getContent();
  }
}
</script>