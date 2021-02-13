import { mount } from '@vue/test-utils';
import Down from '@/elements/Down.vue';

describe('Down arrow component Test', () => {
  
  it('should contain components', async () => {
    // render the component
    const wrapper = mount(Down)

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.attributes().id).toBe('chevron-down')
    
    const img = wrapper.find('svg');
    expect(img.exists()).toBe(true)

  })
})