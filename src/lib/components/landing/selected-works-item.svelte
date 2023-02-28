<script lang="ts">
	import { FxReveal as Img } from '@zerodevx/svelte-img';

	export let title: string;
	export let description: string;
	export let img: any[];
	export let icons: string[];
	export let label: string;
	export let href: string;
</script>

<div class="shrink-0 snap-start first:pl-4 last:pr-4 xl:first:pl-8 xl:last:pr-8">
	<div class="w-80 xl:w-96 shrink-0 border-2 border-black bg-white shadow-brutalist">
		<Img src={img} alt={title} />

		<div class="p-4">
			<a {href} target="_blank" rel="noopener noreferrer">
				<h3 class="text-lg font-bold hover:text-yellow-beer">{title}</h3>
			</a>

			<div class="mt-2 flex items-center gap-4">
				<div class="flex items-center gap-1">
					{#each icons as icon}
						<img src="/stack/{icon}" alt={title} class="h-5 w-5" />
					{/each}
				</div>
				<div class="border border-gray-700 px-2 py-0.5 text-xs uppercase text-gray-700">
					{label}
				</div>
			</div>
			<p class="mt-3 text-sm">{description}</p>
		</div>
	</div>
</div>
