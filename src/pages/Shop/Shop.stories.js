import Shop from './Shop.vue'

export default {
  title: 'Shop',
  component: Shop,
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Shop },
  template: `<Shop v-bind="$props" />`,
})
