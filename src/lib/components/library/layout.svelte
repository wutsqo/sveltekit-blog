<script lang="ts">
	import Heading from './heading.svelte';

	export let title: 'Library' | 'Antilibrary';
	export let subtitle: string;
</script>

<svelte:head>
	<title>{title} | Muhammad Urwatil Wutsqo</title>
</svelte:head>

<div class="container mx-auto p-4 xl:px-12">
	<h1 class="mt-12 text-4xl lg:mt-16 lg:text-5xl">
		<Heading title="Library" />
		<span class="text-gray-300"> | </span>
		<Heading title="Antilibrary" />
	</h1>
	<div class="mt-4 mb-6 text-lg lg:text-2xl">{subtitle}</div>
	<slot />
</div>
