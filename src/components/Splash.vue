<template>
	<div class="splash">
		<Dinosaur />
		<Twan />
		<Down color="#fff" />
	</div>
</template>

<script>
	import Dinosaur from './Dinosaur.vue';
	import Twan from './Twan.vue';
	import Down from './Down.vue';

export default {
  name: "Splash",
  components: {
		Dinosaur,
		Twan,
		Down
  }
};
</script>

<style scoped>
	.splash {
		background: #4ea888;
		display: grid;
		grid-template-rows: 1fr 2fr 100px;
		place-items: center;
		height: 100vh;
		margin: 0 0 2rem;
	}

	#twan {
		align-self: end;
		margin-bottom: 5rem;
	}
</style>