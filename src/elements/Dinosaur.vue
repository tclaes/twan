<template>
  <div id="dinosaur">
    <img src="./../assets/patchi.svg" alt="Patchi" />
  </div>
</template>

<script>
export default {
  name: "Dinosaur"
};
</script>

<style scoped>
#dinosaur {
  display: flex;
  justify-content: center;
  width: 100%;
}

img {
  display: flex;
  flex: 0 1 300px;
  padding: 2rem;
}

@media screen and (min-width: 724px) {
  #dinosaur {
    margin-top: 2rem;
  }
}
</style>
