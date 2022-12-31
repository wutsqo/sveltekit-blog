<script lang="ts">
	import { onMount } from 'svelte';

	export let color: string = 'transparent';
	export let out: boolean = false;
	export let gridWidth: number = 0;

	let size = 0.5;

	onMount(() => {
		const cellSize = Math.random();
		if (cellSize > 0.95) {
			size = 1.5;
		} else if (cellSize > 0.8) {
			size = 1;
		}
	});

	const randomDelay = (): string => {
		return Math.random() * 0.5 + 's';
	};

	const randomX = (): string => {
		const randomLeftValue = Math.floor(Math.random() * gridWidth - 1) - size * 2;

		return `${randomLeftValue / 2}rem`;
	};

	const randomDrop = (): string => {
		const drop = Math.random() * 100;
		if (drop > 93) {
			return '1rem';
		} else if (drop > 80) {
			return '0.5rem';
		} else if (drop > 60) {
			return '-0.5rem';
		} else if (drop > 40) {
			return '-1rem';
		}
		return '0';
	};

	const randomTiming = (): number => {
		return Math.floor(Math.random() * 360 * 1.2);
	};
</script>

<div>
	{#key randomTiming()}
		<div
			class="cell"
			class:out
			style="
				background: {color};
				width: {size}rem;
				height: {size}rem;
				animation-delay: {randomDelay()};
				top: {randomDrop()};
				left: {randomX()};
			"
		/>
	{/key}
</div>

<style lang="scss">
	.cell {
		opacity: 0;
		mix-blend-mode: overlay;
		position: absolute;
		animation: fade_in 0.36s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;

		&.out {
			opacity: 1;
			animation: fade_out 0.36s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
		}
	}

	@keyframes fade_in {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fade_out {
		from {
			opacity: 1;
			transform: translateY(0);
		}
		to {
			opacity: 0;
			transform: translateY(-12px);
		}
	}

	@keyframes reduce_motion_fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes reduce_motion_fade_reverse {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
