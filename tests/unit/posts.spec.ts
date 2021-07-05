import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import Posts from '@/components/Posts.vue'

describe('Posts.vue Test', () => {
  let $store: any

  beforeEach(() => {
    $store = {
      state: {
        pageInfo: {
          hasPreviousPage: true,
          hasNextPage: true,
        },
        posts: [
          {
            node: {
              creation_date: '2020-11-04',
              title: [
                {
                  type: 'heading1',
                  text: 'Dag 0',
                  spans: [],
                },
              ],
              image: {
                dimensions: {
                  width: 3024,
                  height: 4032,
                },
                alt: 'First kiss from mommie',
                copyright: null,
                url: 'https://images.prismic.io/twanclaes/3690f057-9717-4262-92a0-07714e2aa63b_README.jpg?auto=compress,format',
                thumbnail: {
                  dimensions: {
                    width: 200,
                    height: 266,
                  },
                  alt: 'First kiss from mommie',
                  copyright: null,
                  url: 'https://images.prismic.io/twanclaes/3690f057-9717-4262-92a0-07714e2aa63b_README.jpg?auto=compress,format&rect=0,0,3024,4022&w=200&h=266',
                },
              },
              content: [
                {
                  type: 'paragraph',
                  text: 'Op 4 november ben ik geboren, via een keizersnede want er zouden complicaties kunnen zijn met mijn Mama en dat willen we zeker niet. Mijn hartslag bleef wat hoog tijdens de bevalling dus de keuze voor die keizersnede was snel gemaakt.',
                  spans: [],
                },
                {
                  type: 'paragraph',
                  text: 'Daar was ik dan, een flinke brok baby ( 52cm en 4,510kg ). Heb geprobeerd de Dokter onder te pissen maar dat is mislukt, hij sprong net op tijd weg, doeme toch. Mama dacht dat mij darmen eruit hingen maar dat was mijn heel grote navelstreng.',
                  spans: [],
                },
                {
                  type: 'paragraph',
                  text: 'De Dokter friemelt wat aan me en zegt tegen Papa dat alles in orde lijkt, bij de laatste echo merkte de gynaecologe iets op in mijn hersenen waarvan ze denkt dat het een cyste is, dus voor alle zekerheid vindt morgen een echo plaats.',
                  spans: [],
                },
              ],
            },
          },
        ],
      },
    }
  })

  it('should contain date', () => {
    // render the component
    const wrapper = mount(Posts, {
      global: {
        mocks: { $store },
      },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
