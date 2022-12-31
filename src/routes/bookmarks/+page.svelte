<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Bookmarks | Muhammad Urwatil Wutsqo</title>
</svelte:head>

<div class="font-sans max-w-screen-md flex flex-col gap-4">
	{#each data.bookmarks as item}
		<a
			href={item.url}
			target="_blank"
			rel="noopener noreferrer"
			class="p-4 block float-brutalist hover:bg-gray-100"
		>
			<h2 class="text-xl">{item.title}</h2>
			<p class="mt-2">{item.comment}</p>
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
</div>
