<script lang="ts">
	import axios from 'axios';
	import Heading from './heading.svelte';
	import { onMount } from 'svelte';

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

<div class="w-full max-w-3xl mx-auto p-4">
	<p class="text-lg">
		My name is Wutsqo. I'm a <span class="font-semibold">creative developer</span>
		and currently based in Jakarta, Indonesia. I'm really into frontend development, digital product
		design, and deleting code.
	</p>

	{#if trackData?.item?.id}
		<br />

		<div class="text-lg flex items-center gap-2">Recent listening:</div>

		<div class="flex items-center gap-3 mt-2">
			<img src={trackData.item.album.images[2].url} alt={trackData.item.name} class="h-12 w-12" />
			<!-- <img src="/spotify.svg" alt="Spotify" class="h-10 w-10" /> -->
			<div>
				<p class="text-sm">
					<a
						href="https://open.spotify.com/track/{trackData?.item?.id}"
						class="hover:underline font-semibold"
						target="_blank"
						rel="noopener noreferrer"
					>
						{trackData?.item?.name}
					</a>
					<br />
					<a
						href="https://open.spotify.com/artist/{trackData?.item?.artists[0].id}"
						class="hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						{trackData?.item?.artists[0].name}
					</a>
				</p>
			</div>
		</div>
	{/if}
</div>
