<template>
  <nav class="navigation" v-show="scrolled">
    <ul>
      <li><router-link to="home">Home</router-link></li>
      <li><router-link to="about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      scrolled: false
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > window.innerHeight;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  background: var(--white);
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;

  ul {
    list-style-type: none;
  }
}
</style>
