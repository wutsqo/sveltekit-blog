<script lang="ts">
	import Spotify from './spotify.svelte';

	const subtexts = [
		{
			icon: '💼',
			text: 'Creative Technologist'
		},
		{
			icon: '⚡',
			text: 'Crafting apps using design & code'
		},
		{
			icon: '📍',
			text: 'Jakarta, Indonesia'
		}
	];
</script>

<div
	class="sticky top-16 flex xl:h-screen w-full flex-col justify-between gap-8 border-r-2 border-black bg-black py-14 px-4 text-white xl:px-8 2xl:py-20 2xl:px-20"
>
	<div class="flex flex-col justify-center gap-6">
		<img src="/avatar.png" alt="avatar" class="h-28 w-28 rounded-full" />
		<h1 class="text-2xl font-bold">Muhammad Urwatil Wutsqo</h1>
		<div class="">
			{#each subtexts as subtext}
				<div class="subtext-container">
					<div class="icon">
						{subtext.icon}
					</div>
					<h2 class="text-lg font-normal text-gray-300">{subtext.text}</h2>
				</div>
			{/each}
		</div>
	</div>

	<Spotify />
</div>

<style>
	.subtext-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		color: #1a202c;
	}
</style>
