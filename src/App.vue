<template>
	<div id="app">
		<Splash />
		<TwansStorie />
	</div>
</template>

<script>
	import Splash from './pages/Splash.vue';
	import TwansStorie from './components/TwansStorie';
	import { PrismicLink } from "apollo-link-prismic";
	import { InMemoryCache } from "apollo-cache-inmemory";
	import ApolloClient from "apollo-client";
	import gql from "graphql-tag";

	const client = new ApolloClient({
		link: PrismicLink({
			uri: "https://twanclaes.prismic.io/graphql",
		}),
		cache: new InMemoryCache()
	});
		
	export default {
		name: 'App',
		components: {
			Splash,
			TwansStorie
		},
		mounted: () => {
			client.query({
				query: gql`
					query {
						allPosts {
							edges {
								node {
									title
								}
							}
						}
					}
				`
			}).then(response => {
				console.log(response);
			}).catch(error => {
				console.error(error);
			});
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