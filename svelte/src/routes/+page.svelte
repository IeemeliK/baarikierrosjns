<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import MapScript from '$lib/Mapscript.svelte';
	import mapStyles from '$lib/map-styles';

	export let data: PageData;

	let container: HTMLElement;
	let map: google.maps.Map;

	const mapOptions = {
		center: { lat: 62.6018675, lng: 29.7612755 },
		zoom: 15,
		styles: mapStyles
	};

	onMount(async () => {
		const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
		map = new Map(container, mapOptions);
	});
	console.log(data.placeData);
</script>

<MapScript />
<main class="w-screen h-screen flex flex-col justify-center items-center">
	<div class="text-white mb-5">
		<h1 class="text-2xl">Baarivalikko</h1>
	</div>
	<div class="h-5/6 w-3/6" bind:this={container} />
</main>
