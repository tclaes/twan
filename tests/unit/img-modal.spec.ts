import { mount } from '@vue/test-utils'
import type { ImageField } from '@prismicio/client'
import ImgModal from '@/elements/Img-modal.vue'

const emptyImage = {} as ImageField<'thumbnail'>

describe('Img modal component Test', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(ImgModal, {
      props: { image: emptyImage },
    })
  })

  it('should contain components', async () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should contain prop image', async () => {
    expect(wrapper.props('image')).toEqual({})
  })
})
