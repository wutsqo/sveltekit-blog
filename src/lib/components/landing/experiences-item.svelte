<script lang="ts">
	export let experience: any;
	export let open = false;
</script>

<button
	class="group first:border-t-2 border-black last:border-b-2 relative"
	on:click={() => (open = !open)}
>
	<div class="flex justify-between py-4 text-left items-end">
		<div class="flex flex-col gap-1 w-full">
			<div class="flex flex-col gap-1 sm:flex-row-reverse sm:justify-between w-full">
				<div class="font-light text-sm">{experience.date}</div>
				<div class="text-xl font-bold group-hover:text-yellow-beer">
					{experience.title}
				</div>
			</div>
			<div class="text-base">
				{experience.company}
			</div>
		</div>
	</div>
	<div
		class="text-left duration-500 transition-height ease-in-out overflow-hidden pl-4 {open
			? 'h-fit mb-4'
			: 'h-0'}"
	>
		<ul class="list-disc list-outside">
			{#each experience.desc as desc}
				<li class="text-sm">{desc}</li>
			{/each}
		</ul>
	</div>
	<div
		class="absolute right-0 top-11 duration-100 transition-transform {open
			? 'opacity-100 rotate-90'
			: 'md:opacity-0 group-hover:opacity-100'}"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
		</svg>
	</div>
</button>
