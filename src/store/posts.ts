import { defineStore } from 'pinia'
import type { RichTextField, ImageField } from '@prismicio/client'
import { getPosts } from '@/services/queries'

export interface PostData {
  uid: string
  creation_date: string
  title: RichTextField
  image: ImageField | null
  content: RichTextField
  body?: Array<{ fields?: Array<{ gallery_image: ImageField }> }>
}

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as PostData[],
    hasNextPage: false,
    sorting: 'DESC',
    page: 1,
    loading: false,
  }),
  actions: {
    async fetchPosts() {
      const result = await getPosts(this.sorting, 1)
      this.posts = result.posts as PostData[]
      this.hasNextPage = result.pageInfo.hasNextPage
      this.page = 1
    },
    async loadMore() {
      if (this.loading) return
      this.loading = true
      try {
        const nextPage = this.page + 1
        const result = await getPosts(this.sorting, nextPage)
        this.posts = [...this.posts, ...result.posts] as PostData[]
        this.hasNextPage = result.pageInfo.hasNextPage
        this.page = nextPage
      } finally {
        this.loading = false
      }
    },
    async setSorting(sorting: string) {
      this.sorting = sorting
      await this.fetchPosts()
    },
  },
})
