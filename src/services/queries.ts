import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import gql from 'graphql-tag'

const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://twanclaes.prismic.io/graphql',
  }),
  cache: new InMemoryCache(),
})

export async function getPosts(sorting = 'DESC', cursor = '', amount = 20) {
  return await client
    .query({
      query: gql`
        query {
          allPosts(
            sortBy: meta_firstPublicationDate_${sorting}
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
                body {
                  ... on PostBodyImage_gallery {
                    type,
                    fields {
                      gallery_image
                    }
                  }
                __typename
                }
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
      }
    })
    .catch((error) => {
      return console.error(error)
    })
}
