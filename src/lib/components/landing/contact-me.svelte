<script lang="ts">
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

<Heading number="V" text="Contact" />

<div class="w-full max-w-3xl mx-auto p-4">
	<!-- <h3 class="text-xl">Availability</h3> -->
	<p class="mt-1 text-lg">
		I'm currently <span class="font-bold underline decoration-magenta-cerise decoration-2">
			available
		</span> to take on freelance projects on a case-by-case basis. Reach out and touch faith. ↓
	</p>
</div>

<div class="w-full max-w-3xl mx-auto p-4">
	<div
		class="flex h-48 items-center justify-center p-16 border-black border-2"
		on:mousemove={handleMousemove}
	>
		{#if !hovered}
			<a
				href="mailto:urwatilwutsqo16@gmail.com"
				class="border-2 border-black px-4 py-4 text-2xl w-52 bg-white block hover:bg-black hover:text-white text-center"
			>
				CONTACT ME
			</a>
		{/if}
	</div>

	<div class="w-full overflow-hidden">
		{#each coordinateHistory as coordinate}
			<div
				class="absolute bg-white -translate-x-1/2 -translate-y-1/2"
				style="top: {coordinate.y}px; left: {coordinate.x}px;"
			>
				<a
					href="mailto:urwatilwutsqo16@gmail.com"
					class="border-2 border-black px-4 py-4 text-2xl w-52 bg-white block hover:bg-black hover:text-white text-center"
				>
					CONTACT ME
				</a>
			</div>
		{/each}
	</div>

	<!-- <p>
		I’m most active and reachable via email. You can also check out my resume, if you’re into that
		sort of thing.
	</p> -->
</div>
