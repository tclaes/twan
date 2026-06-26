import { defineStore } from 'pinia'
import type { RichTextField, ImageField } from '@prismicio/client'
import { getPosts } from '@/services/queries'

export interface PostData {
  uid: string
  creation_date: string
  title: RichTextField
  image: ImageField<'thumbnail'> | null
  content: RichTextField
  body?: Array<{ fields?: Array<{ gallery_image: ImageField<'thumbnail'> }> }>
}

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as PostData[],
    hasNextPage: false,
    sorting: 'DESC',
    page: 1,
  }),
  actions: {
    async fetchPosts() {
      const result = await getPosts(this.sorting, 1)
      this.posts = result.posts as PostData[]
      this.hasNextPage = result.pageInfo.hasNextPage
      this.page = 1
    },
    async loadMore() {
      const nextPage = this.page + 1
      const result = await getPosts(this.sorting, nextPage)
      this.posts = [...this.posts, ...result.posts] as PostData[]
      this.hasNextPage = result.pageInfo.hasNextPage
      this.page = nextPage
    },
    async setSorting(sorting: string) {
      this.sorting = sorting
      await this.fetchPosts()
    },
  },
})
