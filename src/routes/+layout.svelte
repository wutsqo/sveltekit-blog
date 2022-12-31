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
	];
</script>

<div class="app relative overflow-hidden min-h-screen bg-black py-2 md:px-2">
	<Loader loading={$isLoading} />

	<header class="relative">
		<nav class="flex justify-between items-center text-white px-4 py-4 pb-12 lg:pb-4">
			<a href="/" class="hidden sm:inline-flex text-2xl">
				<span class="text-bluish-purple">W</span>
				<span class="text-yellow-beer">W</span>
				<span class="text-magenta-cerise">WUTSQO</span>
			</a>
			<div class="flex gap-8 justify-between w-full sm:justify-end text-base">
				{#each navlinks as url}
					<Navlink href={url.href} color={url.color}>
						{url.text}
					</Navlink>
				{/each}
			</div>
		</nav>
		{#if $page.route.id === '/'}
			<div
				class="absolute left-0 right-0 bg-white text-black mx-auto w-fit sm:w-96 border-2 z-50
						border-black text-center p-2 text-xl md:text-2xl uppercase font-bold -translate-y-1/2"
				style="box-shadow: 5px 5px #000;"
			>
				Muhammad Urwatil Wutsqo
			</div>
		{/if}
		<div class="absolute top-20">
			<Mondrian refresh={`${$page.route.id}`} />
		</div>
	</header>

	<main class="bg-white py-8 min-h-screen">
		<slot />
	</main>

	<footer class="bg-black text-white w-full bottom-0">
		<div class="relative">
			<Mondrian refresh={`${$page.route.id}`} />
		</div>
		<div class="flex h-24 items-center justify-center text-xl gap-8 mt-6">
			{#each contacts as contact}
				<Navlink href={contact.href} color={contact.color} target="_blank">
					{contact.text}
				</Navlink>
			{/each}
		</div>

		<div class="text-center text-xs text-gray-300 py-8">
			Made with <span class="text-red-500">❤</span> by Muhammad Urwatil Wutsqo
		</div>
	</footer>
</div>
