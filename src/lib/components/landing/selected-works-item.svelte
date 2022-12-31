<script lang="ts">
	export let title: string;
	export let description: string;
	export let img: string;
	export let icons: string[];
	export let label: string;
	export let href: string;
</script>

<div
	class="border-2 border-black shadow-brutalist hover:shadow-none hover:translate-x-1 hover:translate-y-1 w-full max-w-sm"
>
	<img src={img} alt={title} />

	<div class="p-4">
		<a {href} target="_blank" rel="noopener noreferrer">
			<h3 class="text-lg font-bold hover:text-yellow-beer">{title}</h3>
		</a>

		<div class="flex items-center gap-4 mt-2">
			<div class="flex items-center gap-1">
				{#each icons as icon}
					<img src="/stack/{icon}" alt={title} class="h-5 w-5" />
				{/each}
			</div>
			<div class="text-xs px-2 py-0.5 border border-gray-700 text-gray-700 uppercase">
				{label}
			</div>
		</div>
		<p class="mt-3 text-sm">{description}</p>
	</div>
</div>
