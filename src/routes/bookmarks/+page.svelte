<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let bookmarks = data.bookmarks;
	let query = '';

	const search = (query: string) => {
		if (!query) return (bookmarks = data.bookmarks);

		bookmarks = data.bookmarks.filter((item) => {
			return (
				item.title.toLowerCase().includes(query.trim().toLowerCase()) ||
				item.comment.toLowerCase().includes(query.trim().toLowerCase()) ||
				item.url.toLowerCase().includes(query.trim().toLowerCase())
			);
		});
	};

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
</div>

<div class="max-w-screen-md flex flex-col gap-4 mt-6">
	{#each bookmarks as item}
		<a
			href={item.url}
			target="_blank"
			rel="noopener noreferrer"
			class="p-4 block float-brutalist hover:bg-gray-100"
		>
			<h2 class="text-xl">{item.title}</h2>
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
