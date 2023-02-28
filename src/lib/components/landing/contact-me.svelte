<script lang="ts">
	import Github from '$lib/icons/github.svelte';
	import Instagram from '$lib/icons/instagram.svelte';
	import Linkedin from '$lib/icons/linkedin.svelte';
	import Twitter from '$lib/icons/twitter.svelte';
	import Heading from './heading.svelte';

	let m = { x: 0, y: 0 };
	let hovered = false;
	let coordinateHistory: { x: number; y: number }[] = [];

	function handleMousemove(event: MouseEvent) {
		m.x = event.pageX;
		m.y = event.pageY;

		const lastCoordinate = coordinateHistory[coordinateHistory.length - 1] || {
			x: 0,
			y: 0
		};

		if (Math.abs(m.x - lastCoordinate.x) > 10 || Math.abs(m.y - lastCoordinate.y) > 5) {
			coordinateHistory = [...coordinateHistory.slice(-3), { x: m.x, y: m.y }];
			hovered = true;
		}
	}
</script>

<Heading number="V" text="Connect" />

<div class="p-4 xl:px-8">
	<p class="mt-1 text-lg">
		I am glad to connect, so come say hello and have a chat about working together (or simply just
		to chill on the weekend) →
	</p>
</div>

<div class="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 xl:px-8">
	<div class="col-span-2 row-span-2 bg-yellow-beer">
		<div class="box flex h-48 items-center justify-center p-16" on:mousemove={handleMousemove}>
			{#if !hovered}
				<a
					href="mailto:urwatilwutsqo16@gmail.com"
					class="block w-52 border-2 border-black bg-white px-4 py-4 text-center text-2xl hover:bg-black hover:text-white"
				>
					CONTACT ME
				</a>
			{/if}
		</div>

		<div class="w-full overflow-hidden">
			{#each coordinateHistory as coordinate}
				<div
					class="absolute -translate-x-1/2 -translate-y-1/2 bg-white"
					style="top: {coordinate.y}px; left: {coordinate.x}px;"
				>
					<a
						href="mailto:urwatilwutsqo16@gmail.com"
						class="block w-52 border-2 border-black bg-white px-4 py-4 text-center text-2xl hover:bg-black hover:text-white"
					>
						CONTACT ME
					</a>
				</div>
			{/each}
		</div>
	</div>
	<div class="box group bg-github-black">
		<a href="https://github.com/wutsqo " target="_blank" rel="noopener noreferrer">
			<Github className="h-8 w-8 group-hover:scale-125 transition-all duration-500" fill="white" />
		</a>
	</div>
	<div class="box group bg-linkedin-blue">
		<a href="https://www.linkedin.com/in/wutsqo/" target="_blank" rel="noopener noreferrer">
			<Linkedin
				className="h-8 w-8 group-hover:scale-125 transition-all duration-500"
				fill="white"
			/>
		</a>
	</div>
</div>

<style>
	.box {
		min-height: 8rem;
		@apply h-full border-2 border-black;
	}

	.box > a {
		@apply flex h-full w-full items-center justify-center;
	}
</style>
