<script lang="ts">
	export let number: string;
	export let text: string;
</script>

<div
	class="container sticky top-2 z-10 mt-32 mb-10 flex items-center bg-white py-0.5 pl-4 text-left xl:pl-8"
>
	<div class="flex h-12 w-12 items-center justify-center border-2 border-black text-xl">
		{number}
	</div>
	<h2 class="ml-4 font-mono text-xl">{text}</h2>
</div>
