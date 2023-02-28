<script lang="ts">
	export let src: string;
	export let name: string;
</script>

<div class="flex flex-col items-center gap-2 min-w-min">
	<img {src} alt={name} class="h-10 w-10 md:h-14 sm:w-14" />
	<div class="text-xs block">{name}</div>
</div>
