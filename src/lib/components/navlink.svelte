<script lang="ts">
	export let color: string = 'white';
	export let href: string;
	export let target: '_blank' | '_self' | '_parent' | '_top' | null = null;
</script>

<a {href} {target} rel="noopener noreferrer" class="{color} hover:text-white lg:text-lg">
	<slot />
</a>
