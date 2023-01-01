<script lang="ts">
	import type { PageData } from './$types';

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
</script>

<svelte:head>
	<title>Bookmarks | Muhammad Urwatil Wutsqo</title>
</svelte:head>

<div class="max-w-screen-md flex flex-col gap-4">
	<input
		type="text"
		class="p-4 block border border-black"
		placeholder="Search bookmarks..."
		bind:value={query}
	/>
	<div class="flex flex-wrap gap-2">
		<button
			class="px-3 py-1 text-xs border border-gray-500 text-gray-700"
			on:click={() => (query = '')}
		>
			All
		</button>
		{#each allTags as tag}
			<button
				class="px-3 py-1 text-xs border border-gray-500 text-gray-700"
				on:click={() => (query = `#${tag}`)}
			>
				{tag}
			</button>
		{/each}
	</div>
</div>

<div class="max-w-screen-md flex flex-col gap-4 mt-6">
	{#each bookmarks as item}
		<a
			href={item.url}
			target="_blank"
			rel="noopener noreferrer"
			class="px-4 py-6 block float-brutalist hover:bg-gray-100"
		>
			<h2 class="text-xl">{item.title}</h2>
			<!-- <div class="mt-2">
				{#each item.tags as tag}
					<span class="inline-block px-3 py-1 text-xs border border-gray-500 text-gray-700 mr-2">
						{tag.name}
					</span>
				{/each}
			</div> -->

			<p class="mt-4 text-sm text-gray-700">{item.comment}</p>
			<p class="mt-4 text-xs text-gray-500 truncate w-full">
				{item.url}
			</p>
			<p class="text-xs text-gray-500">
				Bookmarked at {new Date(item.date).toLocaleDateString('en-US', {
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
