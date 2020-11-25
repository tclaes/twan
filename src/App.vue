<template>
  <div id="app">
    <Splash></Splash>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Splash from './components/Splash.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Splash
  }
}
</script>

<style>
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
