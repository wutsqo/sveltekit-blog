<script lang="ts">
	import Heading from './heading.svelte';
	import SelectedWorksItem from './selected-works-item.svelte';

	let items = [
		{
			title: 'Konser 30 Tahun Dewa 19',
			img: '/works/dewa19.png',
			description: 'An official page containing information about the concert and ticket purchase.',
			icons: ['ts.svg', 'react.svg', 'gatsby.svg', 'tailwind.svg', 'styled.svg'],
			label: 'Landing Page',
			href: 'https://dewa19.tiketnft.com/'
		},
		{
			title: 'Purwalenta Website',
			img: '/works/purwalenta.png',
			description: 'An education platform to empower content creator talents in Indonesia.',
			icons: ['django.svg', 'sql.svg', 'gatsby.svg', 'styled.svg', 'figma.svg'],
			label: 'App/Product',
			href: 'https://purwalenta.com/'
		},
		{
			title: 'Pansos PMB Fasilkom UI 2021',
			img: '/works/pmb.png',
			description: 'A one-stop onboarding platform for the new students of Fasilkom UI.',
			icons: ['ts.svg', 'node.svg', 'sql.svg', 'prisma.svg', 'aws.svg'],
			label: 'Backend/API',
			href: 'https://pmb.cs.ui.ac.id/'
		}
	];
</script>

<Heading number="I" text="Selected Works" />

<div class="mx-auto container flex justify-center px-4 flex-wrap gap-6">
	{#each items as item}
		<SelectedWorksItem {...item} />
	{/each}
</div>
