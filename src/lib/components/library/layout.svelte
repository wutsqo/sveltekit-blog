<script lang="ts">
	import Heading from './heading.svelte';

	export let title: 'Library' | 'Antilibrary' | 'Bookmarks';
	export let subtitle: string;
</script>

<svelte:head>
	<title>{title} | Muhammad Urwatil Wutsqo</title>
</svelte:head>

<div class="mx-auto container p-4">
	<h1 class="lg:mt-8 text-4xl lg:text-6xl">
		<Heading title="Library" />
		<span class="text-gray-300"> | </span>
		<Heading title="Antilibrary" />
		<span class="text-gray-300"> | </span>
		<Heading title="Bookmarks" />
	</h1>
	<div class="mt-4 text-lg lg:text-3xl mb-6">{subtitle}</div>
	<slot />
</div>
