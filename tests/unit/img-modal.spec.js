import { mount } from '@vue/test-utils'
import ImgModal from '@/elements/Img-modal.vue'

describe('Dinosaur component Test', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ImgModal, {
      propsData: {
        image: {},
      },
    })
  })

  it('should contain components', async () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should contain prop image', async () => {
    expect(wrapper.props('image')).toEqual({})
  })
})
