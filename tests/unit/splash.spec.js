import { mount } from '@vue/test-utils';
import Splash from '@/components/Splash.vue';
import Dinosaur from '@/elements/Dinosaur.vue';
import Twan from '@/elements/Twan.vue';
import Down from '@/elements/Down.vue';

describe('Splash Test', () => {
  
  it('should contain components', async () => {
    // render the component
    const wrapper = mount(Splash)

    expect(wrapper.exists()).toBe(true);

    // check the components
    expect(wrapper.getComponent(Dinosaur))
    expect(wrapper.getComponent(Twan))
    expect(wrapper.getComponent(Down))
  })
})