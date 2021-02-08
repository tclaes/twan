<template>
  <div>
    <select name="posts" id="posts" @change="onChange">
      <option value="first" default selected>Oudste bericht eerst</option>
      <option value="last">Nieuwste bericht eerst</option>
    </select>
  </div>
</template>

<script>
export default {
  methods: {
    onChange() {
      this.$store.commit('reversePosts')
    }
  }
}
</script>

<style lang="scss" scoped>
  select {
    padding: .5rem;
  }
</style>