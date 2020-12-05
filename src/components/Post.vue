<template>
  <div v-for="post in posts" :key="post.id" >
    <h2>{{post.node.title[0].text}}</h2>
    <template v-for="content in post">
      {{content}}
    </template>
  </div>
</template>

<script>
	import { PrismicLink } from "apollo-link-prismic";
	import { InMemoryCache } from "apollo-cache-inmemory";
	import ApolloClient from "apollo-client";
  import gql from "graphql-tag";
  import linkResolver from "./../prismic/link-resolver";
  import PrismicDOM from 'prismic-dom';

	const client = new ApolloClient({
		link: PrismicLink({
			uri: "https://twanclaes.prismic.io/graphql",
		}),
		cache: new InMemoryCache()
	});

export default {
  data () {
    return {
      document: {}
    };
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
        const contentHtml = PrismicDOM.RichText.asHtml(this.posts[0].node.content, linkResolver);
				console.log(contentHtml);
			}).catch(error => {
				console.error(error);
			});
		}
  },
  created () {
    this.getContent();
  }
}
</script>