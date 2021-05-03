<template>
  <div>
    <a @click="PreviousResults" v-if="hasPreviousPage">Prev </a>
    <a @click="NextResults" v-if="hasNextPage">Next</a>
  </div>
</template>

<script>
import { getPreviousPosts, getPosts } from "@/services/queries";

export default {
  computed: {
    hasPreviousPage() {
      return this.$store.state.pageInfo
        ? this.$store.state.pageInfo.hasPreviousPage
        : false;
    },
    hasNextPage() {
      return this.$store.state.pageInfo
        ? this.$store.state.pageInfo.hasNextPage
        : false;
    },
  },
  methods: {
    PreviousResults() {
      getPreviousPosts(this.$store.state.pageInfo.endCursor).then(
        (response) => {
          this.$store.commit("setPosts", response);
        }
      );
    },
    NextResults() {
      getPosts(this.$store.state.pageInfo.startCursor).then((response) => {
        this.$store.commit("setPosts", response);
      });
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
