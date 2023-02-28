<script lang="ts">
	export let experience: any;
	export let open = false;
</script>

<button class="group relative border-black first:border-t-2 last:border-b-2" on:click>
	<div class="relative flex h-16 items-end justify-between py-4 text-left">
		<div
			class="absolute top-0 left-0 z-0 h-16 bg-black transition-all duration-300 ease-in-out {open
				? 'w-full'
				: 'w-0'}"
		/>
		<div
			class="absolute top-0 left-0 z-0 h-16 bg-yellow-beer transition-all delay-75 duration-300 ease-in-out {open
				? 'w-full'
				: 'w-0'}"
		/>
		<div
			class="absolute top-0 left-0 z-0 h-16 bg-magenta-cerise transition-all delay-150 duration-300 ease-in-out {open
				? 'w-full'
				: 'w-0'}"
		/>
		<div
			class="z-10 px-4 text-xl group-hover:text-yellow-beer {open ? 'text-white' : 'text-black'}"
		>
			{experience.company}
		</div>
	</div>

	<div
		class="overflow-hidden pl-4 text-left transition-height duration-500 ease-in-out xl:hidden {open
			? 'mb-4 h-fit pt-4'
			: 'h-0'}"
	>
		<ul class="list-outside list-disc">
			{#each experience.desc as desc}
				<li class="text-sm">{desc}</li>
			{/each}
		</ul>
	</div>

	<div
		class="absolute right-4 top-5 transition-transform duration-100 {open
			? 'text-white opacity-100 rotate-90 xl:rotate-0'
			: 'group-hover:opacity-100 md:opacity-0'}"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="h-6 w-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
		</svg>
	</div>
</button>
