<template>
  <div id="home">
    <Splash />
    <TwansStory />
  </div>
</template>

<script setup lang="ts">
  import Splash from './../components/Splash.vue'
  import TwansStory from '../components/TwansStory.vue'
</script>

<style>
  @font-face {
    font-family: 'Little Dinosaur';
    src: url('/fonts/LittleDinosaur.otf');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Little Dinosaur';
    src: url('/fonts/LittleDinosaur-Bold.otf');
    font-display: block;
    font-weight: 700;
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
    color: #2c3e50;
    margin: 0;
  }
</style>
