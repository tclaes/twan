<template>
	<div class="splash">
		<Dinosaur></Dinosaur>
		<h1>Twan</h1>
		<h2>04-11-2020</h2>
	</div>
</template>

<script>
	import Dinosaur from './Dinosaur.vue';

export default {
  name: "Splash",
  components: {
    Dinosaur
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
		margin: 0;
	}

	h1 {
		color: #DCBF85;
    font-family: "Little Dinosaur";
	}

	h2 {
		color: white;
    font-family: "Little Dinosaur";
	}
</style>