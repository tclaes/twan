import { mount } from '@vue/test-utils';
import Post from '@/pages/Post.vue';

describe('Post.vue Test', () => {
  it('should contain components', () => {
    // render the component
    const wrapper = mount(Post)

    // check the components
    expect(wrapper.getComponent(Splash))
    expect(wrapper.getComponent(TwansStorie))
  })
})