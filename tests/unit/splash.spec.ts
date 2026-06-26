import { mount } from '@vue/test-utils'
import Splash from '@/components/Splash.vue'
import Dinosaur from '@/elements/Dinosaur.vue'
import Twan from '@/elements/Twan.vue'
import Down from '@/elements/Down.vue'

describe('Splash Test', () => {
  it('should contain components', async () => {
    const wrapper = mount(Splash)

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.getComponent(Dinosaur))
    expect(wrapper.getComponent(Twan))
    expect(wrapper.getComponent(Down))
  })
})
