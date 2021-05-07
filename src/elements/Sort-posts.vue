<template>
  <div id="sorting">
    <select name="posts" id="posts" @change="onChange($event)">
      <option value="ASC" selected>Oudste bericht eerst</option>
      <option value="DESC">Nieuwste bericht eerst</option>
    </select>
  </div>
</template>

<script>
import { getPosts } from "@/services/queries";

export default {
  methods: {
    onChange(e) {
      getPosts(e.target.value).then((response) => {
        this.$store.commit("setPosts", response);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  select {
    padding: .5rem;
  }
</style>
