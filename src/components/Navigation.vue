<template>
  <nav class="navigation">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
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
