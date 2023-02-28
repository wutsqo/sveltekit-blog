<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';
	import MusicPlayingIcon from './music-playing.svelte';
	import SpotifyIcon from './spotify-icon.svelte';

	let trackData: any;

	onMount(async () => {
		const fetchData = () =>
			axios.get('/api/spotify/recent').then((res) => {
				trackData = res.data;
			});

		fetchData();
		const interval = setInterval(fetchData, 10000);

		return () => clearInterval(interval);
	});
</script>

<div class="relative my-8 flex h-14 w-full gap-4 text-gray-300">
	<img
		src={trackData?.item.album.images[1].url}
		alt={trackData?.item.name}
		class="aspect-square h-full"
	/>

	<div class="absolute aspect-square h-14">
		<div class="absolute top-1.5 right-1.5">
			<SpotifyIcon />
		</div>
	</div>

	<div class="flex h-full flex-col justify-between pt-1 pb-1">
		{#if trackData?.item?.id}
			<div class="mb-1 flex items-baseline gap-2 text-xs font-medium text-gray-500">
				<MusicPlayingIcon />
				{#if trackData?.type === 'current'}
					<span> Now playing </span>
				{:else if trackData?.type === 'recent'}
					<span> Last played </span>
				{/if}
			</div>

			<p class="text-sm">
				<a
					href="https://open.spotify.com/track/{trackData?.item?.id}"
					class="text-sm font-semibold text-gray-300 hover:underline md:text-base"
					target="_blank"
					rel="noopener noreferrer"
				>
					{trackData?.item?.name},
				</a>
				<a
					href="https://open.spotify.com/artist/{trackData?.item?.artists[0].id}"
					class="text-xs text-gray-300 hover:underline md:text-sm"
					target="_blank"
					rel="noopener noreferrer"
				>
					{trackData?.item?.artists[0].name}
				</a>
			</p>
		{:else}
			<div class="flex h-full items-center text-xs">Retrieving data from Spotify...</div>
		{/if}
	</div>
</div>
