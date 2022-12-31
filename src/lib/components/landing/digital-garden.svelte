<script lang="ts">
	import Heading from './heading.svelte';
</script>

<div class="relative my-96 -left-4 w-screen">
	<svg
		class="w-[calc(100vw-2rem)] aspect-21/3"
		preserveAspectRatio="none"
		viewBox="0 0 1000 200"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clip-path="url(#clip0_307_47)">
			<path d="M0 0V200H1000L0 0Z" fill="black" />
			<path d="M1000 0V200H0L1000 0Z" fill="#23C8A0" />
		</g>
		<defs>
			<clipPath id="clip0_307_47">
				<rect width="1000" height="200" fill="white" />
			</clipPath>
		</defs>
	</svg>

	<div class="z-10 relative">
		<Heading number="IV" text="The Digital Garden" />
	</div>

	<div class="h-96 -left-8 w-[calc(100vw+2rem)] relative">a</div>

	<svg
		class="w-[calc(100vw-2rem)] aspect-21/3"
		preserveAspectRatio="none"
		viewBox="0 0 1000 200"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clip-path="url(#clip0_308_55)">
			<path d="M1000 200V-1.66893e-06H0L1000 200Z" fill="black" />
			<path d="M0 200V-1.66893e-06H1000L0 200Z" fill="#23C8A0" />
		</g>
		<defs>
			<clipPath id="clip0_308_55">
				<rect width="1000" height="200" fill="white" transform="translate(1000 200) rotate(180)" />
			</clipPath>
		</defs>
	</svg>
</div>
