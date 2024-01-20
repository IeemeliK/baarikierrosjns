<script lang="ts">
	import { onMount } from 'svelte';
	import MapScript from '$lib/mapscript.svelte';
	import mapStyles from '$lib/map-styles';

	let container: HTMLElement;
	let map: google.maps.Map;

	onMount(async () => {
		const mapOptions = {
			center: { lat: 62.6018675, lng: 29.7612755 },
			zoom: 15,
			styles: mapStyles
		};
		const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
		map = new Map(container, mapOptions);
	});
</script>

<MapScript />
<div class="w-screen h-screen" bind:this={container} />
