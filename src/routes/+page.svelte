<script lang="ts">
	import SelectedWorks from '$lib/components/landing/selected-works.svelte';
	import Stack from '$lib/components/landing/stack.svelte';
	import About from '$lib/components/landing/about.svelte';
	import Experiences from '$lib/components/landing/experiences.svelte';
	import ContactMe from '$lib/components/landing/contact-me.svelte';
	import Side from '$lib/components/landing/side.svelte';
	import Hero from '$lib/components/landing/hero.svelte';
</script>

<svelte:head>
	<title>Muhammad Urwatil Wutsqo</title>
</svelte:head>

<div class="flex flex-col xl:flex-row">
	<div class="w-full xl:w-1/3">
		<Side />
	</div>
	<div class="w-full xl:w-2/3">
		<Hero />
		<SelectedWorks />
		<Stack />
		<Experiences />
		<About />
		<ContactMe />
		<div class="h-32" />
	</div>
</div>
