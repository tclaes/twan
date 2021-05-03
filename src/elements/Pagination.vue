<template>
  <div class="pagination">
    <a @click="PreviousResults" v-if="hasPreviousPage">Oudere berichten </a>
    <a @click="NextResults" v-if="hasNextPage">Nieuwere berichten</a>
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
      getPreviousPosts(this.$store.state.pageInfo.startCursor)
        .then((response) => {
          this.$store.commit("setPosts", response);
        })
        .then(() => this.scrollTo(window.innerHeight));
    },
    NextResults() {
      getPosts(this.$store.state.pageInfo.endCursor)
        .then((response) => {
          this.$store.commit("setPosts", response);
        })
        .then(() => this.scrollTo(window.innerHeight));
    },
    scrollTo(top) {
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

a {
  border: 1px solid #333;
  cursor: pointer;
  padding: 0.5rem 1.2rem;
}
</style>
