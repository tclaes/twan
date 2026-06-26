<template>
  <section class="splash">
    <Dinosaur />
    <Twan />
    <Down color="#fff" />
  </section>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue'
  import Dinosaur from './../elements/Dinosaur.vue'
  import Twan from './../elements/Twan.vue'
  import Down from './../elements/Down.vue'

  function setVh() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
  }

  onMounted(() => {
    setVh()
    window.addEventListener('resize', setVh)
  })

  onUnmounted(() => window.removeEventListener('resize', setVh))
</script>

<style scoped lang="scss">
  .splash {
    background: #4ea888;
    display: grid;
    grid-template-rows: 1fr 2fr 100px;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    place-items: center;
    margin: 0 0 2rem;
  }

  @media (orientation: landscape) and (max-width: 768px) {
    .splash {
      grid-template-rows: 1fr 1fr 100px;
      height: 100%;
    }
  }

  #twan {
    align-self: end;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 768px) {
    #twan {
      margin-bottom: 5rem;
    }
  }

  @media screen and (min-height: 1024px) and (min-width: 768px) {
    #twan {
      margin-bottom: 15rem;
    }
  }
</style>
