<template>
  <Navigation v-show="currentRouteName" />
  <router-view />
</template>

<script>
  import Navigation from "@/components/Navigation";

  export default {
    components: { Navigation },
    data() {
      return {
        isVisible: false,
      }
    },
    computed: {
      currentRouteName() {
        if (this.$route.name !== 'Home') {
          return true
        }
        return this.isVisible
      },
    },
    created() {
      window.addEventListener('scroll', this.handleScroll)
    },
    unmounted() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        this.isVisible = window.scrollY > window.innerHeight
      },
    },
  }
</script>
