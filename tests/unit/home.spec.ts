import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Home from '@/pages/Home.vue'
import Splash from '@/components/Splash.vue'
import TwansStory from '@/components/TwansStory.vue'

describe('Home.vue Test', () => {
  let pinia: ReturnType<typeof createPinia>

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('should contain components', async () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [pinia],
        stubs: { Posts: true },
      },
    })

    expect(wrapper.getComponent(Splash))
    expect(wrapper.getComponent(TwansStory))
  })
})
