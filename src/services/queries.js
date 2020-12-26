import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

const client = new ApolloClient({
  link: PrismicLink({
    uri: "https://twanclaes.prismic.io/graphql",
  }),
  cache: new InMemoryCache()
});

export async function getPosts() {
  return await client.query({
		query: gql`
			query {
				allPosts(sortBy:meta_firstPublicationDate_ASC) {
					edges {
						node {
              creation_date,
							title,
              image,
              content
						}
					}
				}
			}
		`
  }).then(response => {
    return response.data.allPosts.edges;
  }).catch(error => {
    return console.error(error);
  });
}