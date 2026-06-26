import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Sort from '@/elements/Sort-posts.vue'
import { usePostsStore } from '@/store/posts'

vi.mock('@/services/queries', () => ({
  getPosts: vi.fn().mockResolvedValue({
    posts: [],
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  }),
}))

describe('Sort posting', () => {
  let wrapper: any
  let pinia: ReturnType<typeof createPinia>

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
    wrapper = mount(Sort, { global: { plugins: [pinia] } })
  })

  it('should contain components', async () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.attributes().id).toBe('sorting')
  })

  it('should call setSorting when select changes', async () => {
    const store = usePostsStore()
    const spy = vi.spyOn(store, 'setSorting').mockResolvedValue()
    await wrapper.find('select#posts').trigger('change')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
