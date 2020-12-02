<template>
	<div class="splash">
		<Dinosaur />
		<Twan />
	</div>
</template>

<script>
	import Dinosaur from './Dinosaur.vue';
	import Twan from './Twan.vue';

export default {
  name: "Splash",
  components: {
		Dinosaur,
		Twan
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
	.splash {
		background: #4ea888;
		display: grid;
		place-items: center;
		height: 100vh;
		margin: 0 0 2rem;
	}
</style>