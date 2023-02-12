<script lang="ts">
	import axios from 'axios';
	import Heading from './heading.svelte';
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

<Heading number="IV" text="About" />

<div class="mx-auto w-full max-w-3xl p-4">
	<p class="text-lg">
		My name is Wutsqo. I'm a <span class="font-semibold">creative developer</span>
		and currently based in Jakarta, Indonesia. I'm really into frontend development, digital product
		design, and optimizing code.
	</p>

	<div class="my-8 flex h-24 w-full border-2 border-black md:h-40">
		<img
			src={trackData?.item.album.images[1].url}
			alt={trackData?.item.name}
			class="aspect-square h-full border-r-2 border-black"
		/>

		<div class="relative flex w-full flex-col justify-end p-2 pl-3 md:p-4 md:pl-6">
			<div class="absolute top-2 right-3 md:top-4 md:left-6">
				<SpotifyIcon />
			</div>

			<div class="flex h-full flex-col justify-between md:justify-end">
				{#if trackData?.item?.id}
					<div class="mb-1 flex items-baseline gap-2 text-xs font-medium text-gray-700 md:text-sm">
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
							class="text-base font-semibold text-black hover:underline md:text-xl"
							target="_blank"
							rel="noopener noreferrer"
						>
							{trackData?.item?.name}
						</a>
						<br />
						<a
							href="https://open.spotify.com/artist/{trackData?.item?.artists[0].id}"
							class="text-sm text-black hover:underline md:text-base"
							target="_blank"
							rel="noopener noreferrer"
						>
							{trackData?.item?.artists[0].name}
						</a>
					</p>
				{:else}
					<span class="text-sm"> Retrieving data from Spotify...</span>
				{/if}
			</div>
		</div>
	</div>
</div>
