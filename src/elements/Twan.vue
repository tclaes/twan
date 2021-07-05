<template>
  <div id="twan">
    <h1 class="uppercase">Twan</h1>
    <h2 class="uppercase">04 November 2020</h2>
  </div>
</template>

<script>
  export default {
    name: 'Twan',
  }
</script>

<style scoped>
  h1 {
    color: #dcbf85;
    font-family: 'Little Dinosaur', sans-serif;
    font-weight: 700;
    font-size: 76px;
    margin: 0;
  }

  h2 {
    color: white;
    font-family: 'Little Dinosaur', sans-serif;
    margin: 0;
    font-size: 36px;
    font-weight: normal;
  }

  @media screen and (min-width: 768px) and (min-height: 768px) {
    h1 {
      font-size: 128px;
    }

    h2 {
      font-size: 60px;
    }
  }
</style>
