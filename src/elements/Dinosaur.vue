<template>
  <div id="dinosaur">
    <img src="../../public/img/patchi.svg" alt="Patchi" width="300px" height="150px" />
  </div>
</template>

<script>
  export default {
    name: 'Dinosaur',
  }
</script>

<style scoped>
  #dinosaur {
    display: flex;
    justify-content: center;
    width: 100%;
    max-height: 150px;
  }

  img {
    display: flex;
    width: 100%;
    height: auto;
    max-width: 300px;
    padding: 2rem;
  }

  @media screen and (min-width: 724px) {
    #dinosaur {
      margin-top: 2rem;
      max-height: 300px;
    }
  }
</style>
