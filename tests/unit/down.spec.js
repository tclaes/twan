import { mount } from '@vue/test-utils'
import Down from '@/elements/Down.vue'

describe('Down arrow component Test', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Down, {
      propsData: {
        color: '#fff',
      },
    })
  })

  it('should contain components', async () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.attributes().id).toBe('chevron-down')

    const img = wrapper.find('svg')
    expect(img.exists()).toBe(true)
  })

  it('should contain prop color', async () => {
    expect(wrapper.props('color')).toBe('#fff')
  })

  it('should call scrolldown when clicked', async () => {
    wrapper.vm.scrollDown = jest.fn()
    await wrapper.find('#chevron-down').trigger('click')
    expect(wrapper.vm.scrollDown.mock.calls.length).toBe(1)
  })
})
