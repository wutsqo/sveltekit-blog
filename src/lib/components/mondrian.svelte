<script lang="ts">
	// Credit to https://github.com/josh-collinsworth/joco-sveltekit
	import { browser } from '$app/environment';
	import debounce from 'just-debounce';
	import { onMount } from 'svelte';
	import MondrianCell from './mondrian-cell.svelte';

	export let refresh: string = '';
	export let squareCount: number = 0;

	let count: number = 0;
	let gridWidth: number;
	let out: boolean = false;
	let thisPage: string = '';
	let loadedIn = false;

	const gridColors: string[] = ['#DA1D7E', '#F8B725', '#885EDD', '#23C8A0', '#FFFFFF', '#000000'];

	$: if (refresh && loadedIn) {
		out = true;
		setTimeout(() => {
			thisPage = refresh;
			out = false;
		}, 360);
	} else {
		loadedIn = true;
	}

	const setSquareCount = debounce(() => {
		if (!browser) return;

		let newGridWidth =
			(window.innerWidth /
				parseInt(
					window.getComputedStyle(window.document.body, null).getPropertyValue('font-size')
				)) *
			2;

		// Prevents re-renders when only height changes
		if (gridWidth && gridWidth === newGridWidth) {
			return;
		}

		gridWidth = newGridWidth;

		thisPage == refresh ? (thisPage = String(Math.random())) : (thisPage = refresh);

		if (squareCount) {
			count = squareCount;
			return;
		}

		count = Math.floor(
			(window.innerWidth /
				(parseInt(
					window.getComputedStyle(window.document.body, null).getPropertyValue('font-size')
				) /
					0.65)) *
				2
		);
	}, 300);

	onMount(() => {
		setSquareCount();
		thisPage = refresh;
	});

	const randomColor = () => {
		const color = Math.floor(Math.random() * gridColors.length);

		return gridColors[color];
	};
</script>

<svelte:window on:resize={setSquareCount} />

<div class="grid-wrapper">
	{#key thisPage}
		<div class="cell-grid" aria-hidden="true">
			{#each Array(count) as cell}
				<MondrianCell color={randomColor()} {out} {gridWidth} />
			{/each}
		</div>
	{/key}
</div>

<style lang="scss">
	.grid-wrapper {
		height: 2.5rem;
		position: relative;
		contain: layout size style;
		width: 100%;
		max-width: 100vw;
	}

	.cell-grid {
		height: 2.5rem;
		position: absolute;
		z-index: 2;
		top: 0.5rem;
		left: 0;
		width: 100%;
		max-width: 100vw;

		&:before {
			width: 100%;
			content: '';
			background: transparent;
			height: 4rem;
			position: absolute;
			top: -1rem;
			z-index: 2;
			max-width: 100vw;
		}
	}
</style>
