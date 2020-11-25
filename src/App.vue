<template>
  <div id="app">
    <Splash></Splash>
  </div>
</template>

<script>
import Splash from './components/Splash.vue';

export default {
  name: 'App',
  components: {
    Splash
  }
}
</script>

<style>
@font-face {
   font-family: 'Little Dinosaur';
      src: url('./assets/fonts/LittleDinosaur.otf');
   font-weight: 400;
   font-style: normal;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
