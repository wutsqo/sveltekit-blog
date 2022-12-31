<script lang="ts">
	import type { Book } from '$lib/types';
	export let book: Book;
</script>

<div class="group font-sans">
	<div class="relative w-full aspect-2/3 overflow-hidden rounded-r-lg bg-gray-400">
		<img
			src={book.cover}
			alt={book.title}
			class="rounded-r-lg bg-white group-hover:scale-110 duration-500 transition-all scale-105 aspect-2/3"
		/>
	</div>
	<div class="mt-2 mr-2">
		<div class="font-semibold">{book.title}</div>
		<div class="text-sm prose">
			{book.author}
		</div>
	</div>
</div>
