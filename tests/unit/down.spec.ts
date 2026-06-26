import { mount } from '@vue/test-utils'
import Down from '@/elements/Down.vue'

describe('Down arrow component Test', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(Down, {
      props: { color: '#fff' },
    })
  })

  it('should render the chevron', async () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.attributes().id).toBe('chevron-down')
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('should contain prop color', async () => {
    expect(wrapper.props('color')).toBe('#fff')
  })

  it('should call window.scroll when clicked', async () => {
    const scrollSpy = vi.spyOn(window, 'scroll').mockImplementation(() => {})
    await wrapper.find('#chevron-down').trigger('click')
    expect(scrollSpy).toHaveBeenCalledWith({ top: window.innerHeight, behavior: 'smooth' })
    scrollSpy.mockRestore()
  })
})
