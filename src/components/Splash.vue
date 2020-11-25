<template>
  <div class="splash">
    <h1>Twan</h1>
    <h2>04-11-2020</h2>
  </div>
</template>

<script>
export default {
  name: "Splash",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.splash {
  background: #4ea888;
  display: grid;
  place-items: center;
  height: 100vh;
  margin: 0;
}

h1, h2 {
  color: #DCBF85;
}
</style>
