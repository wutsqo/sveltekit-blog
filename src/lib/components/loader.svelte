<script lang="ts">
	import LoaderLogo from './loader-logo.svelte';
	import LoadingText from './loader-text.svelte';

	export let loading: boolean;
</script>

<div
	class="h-screen w-screen fixed top-0 left-0 pointer-events-none z-50 {loading
		? 'block'
		: 'hidden'} "
>
	<div class="h-screen w-screen flex justify-center items-center absolute">
		<LoadingText />
	</div>
	<div class="h-screen w-screen flex justify-center items-center absolute">
		<LoaderLogo />
	</div>
</div>

<style>
</style>
