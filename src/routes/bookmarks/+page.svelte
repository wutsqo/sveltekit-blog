<script lang="ts">
	import type { PageData } from './$types';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	export let data: PageData;
	let bookmarks = data.bookmarks;
	let query = '';

	const search = (query: string) => {
		if (!query.trim()) return (bookmarks = data.bookmarks);

		bookmarks = data.bookmarks.filter((item) => {
			if (query.trim().startsWith('#')) {
				return item.tags
					.map((item) => item.name)
					.flat()
					.map((item) => item.toLowerCase())
					.includes(query.slice(1).trim().toLowerCase());
			}

			return (
				item.title.toLowerCase().includes(query.trim().toLowerCase()) ||
				item.comment.toLowerCase().includes(query.trim().toLowerCase()) ||
				item.url.toLowerCase().includes(query.trim().toLowerCase()) ||
				item.tags
					.map((item) => item.name)
					.flat()
					.map((item) => item.toLowerCase())
					.includes(query.trim().toLowerCase())
			);
		});
	};

	const allTags = data.bookmarks
		.map((item) => item.tags)
		.flat()
		.map((item) => item.name)
		.filter((item, index, self) => self.indexOf(item) === index);

	$: search(query);

	const [send, receive] = crossfade({
		duration: (t) => Math.sqrt(t * 500),
		fallback: () => ({
			duration: 500,
			css: (t) => `opacity: ${t}`
		})
	});

	let innerWidth = 0;

	const onTagClick = (tag: string) => {
		if (innerWidth > 1280) document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
		query = `${tag}`;
	};
</script>

<svelte:head>
	<title>Bookmarks | Muhammad Urwatil Wutsqo</title>
</svelte:head>

<div class="mx-auto container xl:px-12 xl:grid xl:grid-cols-5 xl:gap-8 xl:py-8">
	<div class="xl:col-span-2 sticky -top-40 bg-white xl:top-0 self-start z-50">
		<h1 class="lg:mt-8 text-4xl lg:text-5xl grid-flow-col p-4">Bookmarks</h1>
		<div class="mt-4 text-lg lg:text-2xl mb-6 h-12 mx-4">
			Articles and videos that I found interesting. ({bookmarks.length})
		</div>
		<div class="max-w-screen-md flex flex-col gap-4 py-4">
			<input
				type="text"
				class="p-4 block border border-black mx-4"
				placeholder="Search bookmarks..."
				bind:value={query}
			/>
			<div class="flex xl:flex-wrap overflow-auto xl:gap-2 px-4 pb-2">
				<button
					class="px-3 py-1 text-xs border border-gray-700 text-gray-700 hover:bg-yellow-beer"
					on:click={() => onTagClick('')}
				>
					All
				</button>
				{#each allTags as tag}
					<button
						class="px-3 py-1 text-xs border-y border-r xl:border border-gray-700 text-gray-700 hover:bg-yellow-beer shrink-0"
						on:click={() => onTagClick(`#${tag}`)}
					>
						{tag}
					</button>
				{/each}
			</div>
		</div>
	</div>
	<div class="xl:px-4 xl:pb-6 xl:col-span-3 p-4">
		<div class="max-w-screen-md flex flex-col gap-4 mt-6">
			{#each bookmarks as item (item.id)}
				<a
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
					class="px-4 xl:px-6 py-6 block float-brutalist bg-white hover:bg-gray-100"
					in:receive={{ key: item.id }}
					out:send={{ key: item.id }}
					animate:flip={{
						duration: (t) => Math.sqrt(t * 500)
					}}
				>
					<h2 class="text-xl">{item.title}</h2>
					<p class="mt-4 text-sm text-gray-700">{item.comment}</p>
					<p class="mt-4 text-xs text-gray-500 truncate w-full">
						{item.url}
					</p>
					<p class="text-xs text-gray-500">
						Bookmarked on {new Date(item.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</p>
				</a>
			{/each}

			{#if !bookmarks.length}
				<p class="text-center text-gray-500">No bookmarks found</p>
			{/if}
		</div>
	</div>
</div>

<svelte:window bind:innerWidth />
