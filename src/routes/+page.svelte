<script lang="ts">
	import SelectedWorks from '$lib/components/landing/selected-works.svelte';
	import Stack from '$lib/components/landing/stack.svelte';
	import About from '$lib/components/landing/about.svelte';
	import Experiences from '$lib/components/landing/experiences.svelte';
	import Hero from '$lib/components/landing/hero.svelte';
	import Writings from '$lib/components/landing/writings.svelte';
	import More from '$lib/components/landing/more.svelte';
	import ContactMe from '$lib/components/landing/contact-me.svelte';

	let scrollY: number;
</script>

<svelte:head>
	<title>Muhammad Urwatil Wutsqo</title>
</svelte:head>

<Hero />
<SelectedWorks />
<Stack />
<Experiences />
<About />
<ContactMe />
<Writings />
<More />

<svelte:window bind:scrollY />
