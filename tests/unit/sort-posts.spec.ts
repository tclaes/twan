import { mount } from '@vue/test-utils'
import Sort from '@/elements/Sort-posts.vue'

describe('Sort posting', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(Sort)
  })

  it('should contain components', async () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.attributes().id).toBe('sorting')
  })

  it('should change order', async () => {
    wrapper.vm.onChange = jest.fn()
    console.log(wrapper.findAll('option'))
    await wrapper.find('select#posts').trigger('change')
    expect(wrapper.vm.onChange.mock.calls.length).toBe(1)
  })
})
