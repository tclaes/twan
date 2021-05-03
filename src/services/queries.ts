import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

const client = new ApolloClient({
  link: PrismicLink({
    uri: "https://twanclaes.prismic.io/graphql",
  }),
  cache: new InMemoryCache(),
});

export async function getPosts(cursor = "", amount = 5) {
  return await client
    .query({
      query: gql`
        query {
          allPosts(
            sortBy: meta_firstPublicationDate_ASC
            after: "${cursor}"
            first: ${amount}
          ) {
            totalCount
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              node {
                creation_date
                title
                image
                content
              }
            }
          }
        }
      `,
    })
    .then((response) => {
      return {
        pageInfo: response.data.allPosts.pageInfo,
        posts: response.data.allPosts.edges,
      };
    })
    .catch((error) => {
      return console.error(error);
    });
}

export async function getPreviousPosts(cursor = "", amount = 5) {
  return await client
    .query({
      query: gql`
        query {
            allPosts(
                sortBy: meta_firstPublicationDate_ASC
                before: "${cursor}"
                last: ${amount}
            ) {
                totalCount
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    startCursor
                    endCursor
                }
                edges {
                    node {
                        creation_date
                        title
                        image
                        content
                    }
                }
            }
        }
    `,
    })
    .then((response) => {
      return {
        pageInfo: response.data.allPosts.pageInfo,
        posts: response.data.allPosts.edges,
      };
    })
    .catch((error) => {
      return console.error(error);
    });
}

export async function getAllPosts() {
  return await client
    .query({
      query: gql`
        query {
          allPosts(sortBy: meta_firstPublicationDate_ASC) {
            edges {
              node {
                creation_date
                title
                image
                content
              }
            }
          }
        }
      `,
    })
    .then((response) => {
      return response.data.allPosts.edges;
    })
    .catch((error) => {
      return console.error(error);
    });
}
