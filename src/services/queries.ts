import * as prismic from '@prismicio/client'

const client = prismic.createClient('twanclaes')

export async function getPosts(sorting = 'DESC', page = 1, pageSize = 20) {
  try {
    const response = await client.get({
      filters: [prismic.filter.at('document.type', 'post')],
      orderings: [
        {
          field: 'my.post.creation_date',
          direction: sorting === 'DESC' ? 'desc' : 'asc',
        },
      ],
      pageSize,
      page,
    })
    return {
      pageInfo: {
        hasNextPage: response.next_page !== null,
        hasPreviousPage: response.prev_page !== null,
      },
      posts: response.results.map((doc) => doc.data),
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
