<script lang="ts">
	import '../app.css';
	import Navlink from '$lib/components/navlink.svelte';
	import Mondrian from '$lib/components/mondrian.svelte';
	import { page } from '$app/stores';
	import { isLoading } from '$lib/store';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Loader from '$lib/components/loader.svelte';

	const setLoading = (newState: boolean): void => {
		isLoading.set(newState);
	};

	beforeNavigate((navigation) => {
		if (navigation.to?.route.id) setLoading(true);
	});

	afterNavigate(() => {
		setLoading(false);
	});

	let contacts = [
		{
			href: 'mailto:urwatilwutsqo16@gmail.com',
			color: 'text-magenta-cerise',
			text: 'Email'
		},
		{
			href: 'https://github.com/wutsqo',
			color: 'text-yellow-beer',
			text: 'Github'
		},
		{
			href: 'https://www.linkedin.com/in/wutsqo',
			color: 'text-bluish-purple',
			text: 'LinkedIn'
		}
	];

	let navlinks = [
		{
			href: '/',
			color: 'text-bluish-purple',
			text: 'Home'
		},
		{
			href: '/bookmarks',
			color: 'text-yellow-beer',
			text: 'Bookmarks'
		},
		{
			href: '/library',
			color: 'text-magenta-cerise',
			text: 'Library'
		}
		// {
		// 	href: '/journal',
		// 	color: 'text-bluish-purple',
		// 	text: 'Journal'
		// }
	];

	let scrollY: number;
</script>

<div class="app relative min-h-screen bg-black md:px-2">
	<Loader loading={$isLoading} />

	<header
		class="sticky top-0 z-50 h-16 border-t-4 border-black transition-colors duration-100"
		style="background-color: {scrollY > 30 ? 'white' : 'black'};"
	>
		<nav class="flex h-full items-center justify-between px-4">
			<a href="/" class="hidden text-2xl sm:inline-flex">
				<span class="text-bluish-purple">W</span>
				<span class="text-yellow-beer">W</span>
				<span class="text-magenta-cerise">WUTSQO</span>
			</a>
			<div class="flex w-full justify-between gap-8 text-base sm:justify-end">
				{#each navlinks as url}
					<Navlink href={url.href} color={url.color}>
						{url.text}
					</Navlink>
				{/each}
			</div>
		</nav>
	</header>

	<hr class="fixed top-16 z-30 w-screen border-2 border-black" />

	<div class="absolute top-20 z-10">
		<Mondrian refresh={`${$page.route.id}`} />
	</div>

	<main class="bg-white">
		<slot />
	</main>

	<footer class="bottom-0 w-full bg-black text-white">
		<div class="relative">
			<Mondrian refresh={`${$page.route.id}`} />
		</div>
		<div class="mt-6 flex h-24 items-center justify-center gap-8 text-xl">
			{#each contacts as contact}
				<Navlink href={contact.href} color={contact.color} target="_blank">
					{contact.text}
				</Navlink>
			{/each}
		</div>

		<div class="py-8 text-center text-xs text-gray-300">
			Made with <span class="text-red-500">❤</span> by Muhammad Urwatil Wutsqo
		</div>
	</footer>
</div>

<svelte:window bind:scrollY />
