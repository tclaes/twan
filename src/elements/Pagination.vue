<template>
  <div class="pagination">
    <a @click="MoreResults" v-if="hasNextPage">Meer berichten</a>
  </div>
</template>

<script>
import { getPosts } from "@/services/queries";

export default {
  computed: {
    hasNextPage() {
      return this.$store.state.pageInfo
        ? this.$store.state.pageInfo.hasNextPage
        : false;
    },
  },
  methods: {
    MoreResults() {
      getPosts(this.$store.state.sorting, this.$store.state.pageInfo.endCursor)
        .then((response) => {
          this.$store.commit("addPosts", response);
        })
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
