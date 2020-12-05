<template>
	<div id="app">
		<Post />
		<Splash />
		<TwansStorie />
	</div>
</template>

<script>
	import Splash from './pages/Splash.vue';
	import TwansStorie from './components/TwansStorie';
	import Post from './components/Post.vue';
		
	export default {
		name: 'App',
		components: {
			Splash,
			TwansStorie,
			Post
		}
	}
</script>

<style>
	@font-face {
		font-family: 'Little Dinosaur';
		src: url('./assets/fonts/LittleDinosaur.otf');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Little Dinosaur';
		src: url('./assets/fonts/LittleDinosaur-Bold.otf');
		font-weight: 700;
		font-style: normal;
	}

	body {
		margin: 0;
		padding: 0;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin: 0;
	}

</style>