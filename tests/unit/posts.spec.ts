import { mount, flushPromises } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Posts from '@/components/Posts.vue'

const testPost = vi.hoisted(() => ({
  uid: 'dag-0',
  creation_date: '2020-11-04',
  title: [{ type: 'heading1', text: 'Dag 0', spans: [] }],
  image: null,
  content: [],
}))

vi.mock('@/services/queries', () => ({
  getPosts: vi.fn().mockResolvedValue({ pageInfo: { hasNextPage: false }, posts: [testPost] }),
}))

describe('Posts.vue Test', () => {
  let pinia: ReturnType<typeof createPinia>

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('should render posts', async () => {
    const wrapper = mount(Posts, {
      global: {
        plugins: [pinia],
        stubs: { Post: true, Sorting: true, Pagination: true },
      },
    })

    await flushPromises()

    expect(wrapper.findAll('article.post')).toHaveLength(1)
  })
})
