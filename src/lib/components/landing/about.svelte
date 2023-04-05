<script lang="ts">
	import Heading from './heading.svelte';
	import { Map } from '@beyonk/svelte-mapbox';
	import viewport from '$lib/useViewportAction';
	let map: any;

	const style = 'mapbox://styles/wutsqo/clecs3mtt001201p0cghlbuc3';
	let zoom = 13;

	const jakarta = {
		center: [106.8310265, -6.149408],
		zoom: 12
	};

	const padang = {
		center: [100.3672959, -0.9256446],
		zoom: 12
	};

	let step = 0;

	const locations = [padang, jakarta];

	const enterViewport = () => {
		if (step === 0) {
			map.flyTo(padang, {
				duration: 2000
			});
		} else {
			map.flyTo(jakarta, {
				duration: 2000
			});
		}
	};

	const zoomIn = () => {
		zoom = zoom + 3;
		map.flyTo(
			{
				...locations[step],
				zoom
			},
			{
				duration: 2000
			}
		);
	};

	const zoomOut = () => {
		zoom = zoom - 3;
		map.flyTo(
			{
				...locations[step],
				zoom
			},
			{
				duration: 2000
			}
		);
	};

	const phrases = [
		'Grew up in a beautiful region of West Sumatra, I started to find my passion in technology and design.',
		'Graduated from high school, I moved to Jakarta and my love for them has grown stronger ever since.'
	];
	let phrase = phrases[0];
	let words = phrase.split(' ');

	let typedChar = '';
	let index = 0;
	let typewriter: string | number | NodeJS.Timer | undefined;
	let displayed = false;
	let isTyping = false;

	const typeChar = () => {
		if (index < words.length) {
			typedChar += words[index];
			typedChar += ' ';
			index += 1;
		} else {
			stopTyping();
			displayed = true;
			return;
		}
	};

	const typing = () => {
		if (!isTyping) {
			isTyping = true;
			typewriter = setInterval(typeChar, 120);
		}
	};

	const stopTyping = () => {
		clearInterval(typewriter);
		isTyping = false;
	};
</script>

<Heading number="IV" text="About" />

<div class="relative">
	<div class="relative h-screen" use:viewport on:enterViewport={enterViewport}>
		<div class="h-full w-full bg-black">
			<Map
				accessToken="pk.eyJ1Ijoid3V0c3FvIiwiYSI6ImNsZWNwNXNqOTAwaXc0Mm1sc3VzOWEyZWEifQ.YcZR_USFcNObmZtviLB_Fw"
				{style}
				bind:this={map}
			/>
		</div>
	</div>
	<div
		class="absolute top-0 h-screen w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-black p-4 text-lg text-white xl:p-8 xl:text-xl"
		use:viewport
		on:enterViewport={typing}
	>
		<p class="max-w-xl pt-24">
			{typedChar}
			<br />
			<button
				class="mt-8"
				style="display: {isTyping ? 'none' : 'block'}"
				on:click={() => {
					index = 0;
					typedChar = '';
					displayed = false;
					typing();

					step = step + 1;
					if (step > 1) {
						step = 0;
					}
					phrase = phrases[step];
					words = phrase.split(' ');

					if (step === 0) {
						map.flyTo(padang, {
							duration: 2000
						});
					} else {
						map.flyTo(jakarta, {
							duration: 2000
						});
					}
				}}
			>
				{#if step === 0}
					Next &rarr;
				{:else}
					&larr; Back
				{/if}
			</button>
		</p>
		<div class="absolute bottom-0 left-0 z-10 h-8 w-full bg-white" />
		<!-- <div
			class="absolute left-0 bottom-16 z-10 flex h-20 w-full items-end justify-center p-2 text-white"
		>
			<button on:click={zoomOut} class="map-control" disabled={zoom <= 3}>-</button>
			<button on:click={zoomIn} class="map-control" disabled={zoom >= 15}>+</button>
		</div> -->
	</div>
</div>

<style>
	.map-control {
		@apply flex h-6 w-6 items-center justify-center border border-black bg-white font-sans text-black;
	}

	.map-control:disabled {
		@apply text-gray-500;
	}
</style>
