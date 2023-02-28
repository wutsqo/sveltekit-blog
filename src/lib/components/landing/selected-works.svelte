<script lang="ts">
	import Heading from './heading.svelte';
	import SelectedWorksItem from './selected-works-item.svelte';
	import dewa19 from '$lib/assets/dewa19.png?run';
	import purwalenta from '$lib/assets/purwalenta.png?run';
	import pmb from '$lib/assets/pmb.png?run';

	let items = [
		{
			title: 'Konser 30 Tahun Dewa 19',
			img: dewa19,
			description: 'An official page containing information about the concert and ticket purchase.',
			icons: ['ts.svg', 'react.svg', 'gatsby.svg', 'tailwind.svg', 'styled.svg'],
			label: 'Landing Page',
			href: 'https://dewa19.tiketnft.com/'
		},
		{
			title: 'Purwalenta Website',
			img: purwalenta,
			description: 'An education platform to empower content creator talents in Indonesia.',
			icons: ['django.svg', 'sql.svg', 'gatsby.svg', 'styled.svg', 'figma.svg'],
			label: 'App/Product',
			href: 'https://purwalenta.com/'
		},
		{
			title: 'Pansos PMB Fasilkom UI 2021',
			img: pmb,
			description: 'A one-stop onboarding platform for the new students of Fasilkom UI.',
			icons: ['ts.svg', 'node.svg', 'sql.svg', 'prisma.svg', 'aws.svg'],
			label: 'Backend/API',
			href: 'https://pmb.cs.ui.ac.id/'
		}
	];
</script>

<Heading number="I" text="Selected Works" />

<!-- <div class="container mx-auto flex flex-wrap justify-center gap-6 px-4">
	{#each items as item}
		<SelectedWorksItem {...item} />
	{/each}
</div> -->
<!-- <div class="relative w-full flex gap-6 snap-x overflow-x-auto pb-14">
	<div
	class="flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto py-4 px-4 pb-14 xl:scroll-px-8 xl:px-8"
>
	{#each items as item}
		<SelectedWorksItem {...item} />
	{/each}
</div>
</div> -->

<div class="overflow-hidden container">
	<div class="relative mx-auto flex w-full snap-start gap-6 overflow-x-auto pb-14">
		{#each items as item}
			<SelectedWorksItem {...item} />
		{/each}
	</div>
</div>

