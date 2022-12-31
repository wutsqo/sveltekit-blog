<script lang="ts">
	import Book from '$lib/components/library/book.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-12 max-w-screen-lg">
	{#each data.books as book}
		<Book {book} />
	{/each}
</div>
