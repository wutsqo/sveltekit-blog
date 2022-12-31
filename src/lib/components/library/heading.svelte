<script lang="ts">
	import { page } from '$app/stores';

	export let title: 'Library' | 'Antilibrary' | 'Bookmarks';
</script>

{#if $page.route.id?.slice(1) === title.toLowerCase()}
	{title}
{:else}
	<a
		href="/{title.toLowerCase()}"
		class="text-gray-300 hover:text-gray-900 transition-colors duration-300"
	>
		{title}
	</a>
{/if}
