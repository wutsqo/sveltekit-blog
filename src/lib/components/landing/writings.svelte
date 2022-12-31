<script>
	import Heading from './heading.svelte';
</script>

<Heading number="VI" text="Writings" />

<div class="w-full max-w-2xl mx-auto p-4 text-center">
	I'm a writer as well if the subject matter is beautiful enough to move me. Below are a few of my
	pieces.
</div>

<div class="mt-8">
	<a class="m-scroll__link" href="/" rel="noreferrer">
		<div class="m-scroll">
			<div class="m-scroll__title m-scroll__title--first">
				<div>
					<span>The Art of Loving: My Personal Commentary on the Book </span>
					<span>The Art of Loving: My Personal Commentary on the Book </span>
					<span>The Art of Loving: My Personal Commentary on the Book </span>
					<span>The Art of Loving: My Personal Commentary on the Book </span>
					<span>The Art of Loving: My Personal Commentary on the Book </span>
				</div>
			</div>
		</div>
	</a>
	<a class="m-scroll__link" href="/" rel="noreferrer">
		<div class="m-scroll">
			<div class="m-scroll__title">
				<div class="right">
					<span>What to say if you don't know what to say</span>
					<span>What to say if you don't know what to say</span>
					<span>What to say if you don't know what to say</span>
					<span>What to say if you don't know what to say</span>
					<span>What to say if you don't know what to say</span>
					<span>What to say if you don't know what to say</span>
					<span>What to say if you don't know what to say</span>
					<span>What to say if you don't know what to say</span>
				</div>
			</div>
		</div>
	</a>
	<!-- <a
		class="m-scroll__link"
		href="https://medium.com/@livia.satriano/100-buoni-motivi-per-farla-finita-allistante-di-roland-topor-6f62f268604c"
		target="_blank"
		rel="noreferrer"
	>
		<div class="m-scroll">
			<div class="m-scroll__title">
				<div>
					<span>“100 buoni motivi per farla finita all’istante” di Roland Topor</span><span
						>“100 buoni motivi per farla finita all’istante” di Roland Topor</span
					>
					<span>“100 buoni motivi per farla finita all’istante” di Roland Topor</span><span
						>“100 buoni motivi per farla finita all’istante” di Roland Topor</span
					>
				</div>
			</div>
		</div>
	</a> -->
</div>

<style>
	.m-scroll {
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		position: relative;
		width: 100%;
		height: 5rem;
		margin: auto;
		background-color: #fff;
		overflow: hidden;
		z-index: 1;
	}
	.m-scroll__link {
		color: #000;
	}
	.m-scroll__link:hover .m-scroll__title div {
		-webkit-animation-play-state: paused;
		animation-play-state: paused;
	}
	.m-scroll__link:hover {
		color: #fff;
	}
	.m-scroll__link:hover .m-scroll {
		background-color: #000;
	}
	.m-scroll__title {
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-justify-content: flex-start;
		-ms-flex-pack: start;
		justify-content: flex-start;
		width: 100%;
		height: 100%;
		white-space: nowrap;
		border-bottom: 2px solid #000;
	}
	.m-scroll__title--first {
		border-top: 2px solid #000;
	}
	.m-scroll__title div {
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-animation: scrollText 30s infinite linear;
		animation: scrollText 30s infinite linear;
	}
	.m-scroll__title div.right {
		-webkit-animation: scrollTextRight 90s infinite linear;
		animation: scrollTextRight 90s infinite linear;
	}
	.m-scroll__title span {
		margin: 0 0 0 6.25rem;
		font-size: 24px;
	}
	@-webkit-keyframes scrollText {
		from {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
		to {
			-webkit-transform: translateX(-50%);
			transform: translateX(-50%);
		}
	}
	@keyframes scrollText {
		from {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
		to {
			-webkit-transform: translateX(-50%);
			transform: translateX(-50%);
		}
	}
	@-webkit-keyframes scrollTextRight {
		from {
			-webkit-transform: translateX(-100%);
			transform: translateX(-100%);
		}
		to {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}
	@keyframes scrollTextRight {
		from {
			-webkit-transform: translateX(-100%);
			transform: translateX(-100%);
		}
		to {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}
</style>
