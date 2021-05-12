<template>
  <section class="splash">
    <Dinosaur />
    <Twan />
    <Down color="#fff" />
  </section>
</template>

<script>
import Dinosaur from "./../elements/Dinosaur.vue";
import Twan from "./../elements/Twan.vue";
import Down from "./../elements/Down.vue";

export default {
  name: "Splash",
  components: {
    Dinosaur,
    Twan,
    Down
  },
  mounted: function() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }
};
</script>

<style scoped lang="scss">
.splash {
  background: #4ea888;
  display: grid;
  grid-template-rows: 1fr 2fr 100px;
  place-items: center;
  margin: 0 0 2rem;
}

@media (orientation: portrait) {
  .splash {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  }
}

#twan {
  align-self: end;
  margin-bottom: 5rem;
}
</style>
