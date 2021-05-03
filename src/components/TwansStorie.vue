<template>
  <div id="twan-storie">
    <h1 class="uppercase">Twan's verhaal in het kort</h1>
    <Posts />
    <h3>to be continued...</h3>
  </div>
</template>

<script>
import Posts from "./Posts";
export default {
  name: "TwansStorie",
  components: {
    Posts,
  },
};
</script>

<style scoped>
#twan-storie {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1200px;
  text-align: left;
  padding: 0 3rem;
  margin: 0 auto;
}

h1 {
  color: #dcbf85;
  font-family: "Little Dinosaur", serif;
  font-weight: 700;
  font-size: 3rem;
  margin: 1rem 0 3rem;
}
</style>
