import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { usePostsStore } from '@/store/posts'
import Posts from '@/components/Posts.vue'

vi.mock('@/services/queries', () => ({
  getPosts: vi.fn().mockResolvedValue({ pageInfo: { hasNextPage: false }, posts: [] }),
}))

describe('Posts.vue Test', () => {
  let pinia: ReturnType<typeof createPinia>

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)

    const store = usePostsStore()
    store.$patch({
      posts: [
        {
          creation_date: '2020-11-04',
          title: [{ type: 'heading1', text: 'Dag 0', spans: [] }],
          image: null,
          content: [],
        },
      ],
      hasNextPage: true,
    })
  })

  it('should render posts', () => {
    const wrapper = mount(Posts, {
      global: {
        plugins: [pinia],
        stubs: { Post: true, Sorting: true, Pagination: true },
      },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
