import { mount } from '@vue/test-utils';
import Home from '@/pages/Home.vue';
import Splash from '@/components/Splash.vue';
import TwansStorie from '@/components/TwansStorie.vue';

describe('Home.vue Test', () => {
  it('should contain components', () => {
    // render the component
    const wrapper = mount(Home)

    // check the components
    expect(wrapper.getComponent(Splash))
    expect(wrapper.getComponent(TwansStorie))
  })
})