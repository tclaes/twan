import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import Home from '@/pages/Home.vue';
import Splash from '@/components/Splash.vue';
import TwansStorie from '@/components/TwansStorie.vue';

describe('Home.vue Test', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      state() {
        return {
          posts: {}
        }
      },
      mutations: {
        setPosts (state, payload) {
          state.posts = payload;
        },
        reversePosts (state) {
          state.posts = state.posts.reverse();
        }
      }
    });
  })

  it('should contain components', async () => {
    // render the component
    const wrapper = mount(Home, {
      global: {
        plugins: [store]
      }
    })

    // check the components
    expect(wrapper.getComponent(Splash))
    expect(wrapper.getComponent(TwansStorie))
  })
})