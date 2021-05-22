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
    name: 'Navigation',
  }
</script>

<style lang="scss" scoped>
  .navigation {
    background: var(--white);
    box-shadow: 0 1px 1px 0 var(--accent-color);
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100vw;

    ul {
      list-style-type: none;
      display: flex;
      padding: 0;

      li {
        font-weight: bold;
        padding: 0.5rem 1rem;
        a {
          color: var(--accent-color);
          font-size: 1.2rem;
          text-decoration: none;
        }
      }
    }
  }
</style>
