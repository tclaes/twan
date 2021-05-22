import { mount } from "@vue/test-utils";
import Dinosaur from "@/elements/Dinosaur.vue";

describe('Dinosaur component Test', () => {
  it('should contain components', async () => {
    // render the component
    const wrapper = mount(Dinosaur)

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.attributes().id).toBe('dinosaur')

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
  })
})
