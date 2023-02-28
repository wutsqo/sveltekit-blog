<script>
	import Heading from './heading.svelte';
	import StackItem from './stack-item.svelte';

	let stacks = [
		{
			name: 'HTML',
			src: '/stack/html.svg'
		},
		{
			name: 'CSS',
			src: '/stack/css.svg'
		},
		{
			name: 'Javascript',
			src: '/stack/js.svg'
		},
		{
			name: 'Typescript',
			src: '/stack/ts.svg'
		},
		{
			name: 'NodeJS',
			src: '/stack/node.svg'
		},
		{
			name: 'Python',
			src: '/stack/py.svg'
		},
		{
			name: 'Django',
			src: '/stack/django.svg'
		},
		{
			name: 'SQL',
			src: '/stack/sql.svg'
		},
		{
			name: 'Prisma',
			src: '/stack/prisma.svg'
		},
		{
			name: 'GraphQL',
			src: '/stack/graphql.svg'
		},
		{
			name: 'React',
			src: '/stack/react.svg'
		},
		{
			name: 'Svelte',
			src: '/stack/svelte.svg'
		},
		{
			name: 'Tailwind',
			src: '/stack/tailwind.svg'
		},
		{
			name: 'NextJS',
			src: '/stack/next.svg'
		},
		{
			name: 'Gatsby',
			src: '/stack/gatsby.svg'
		},
		{
			name: 'Styled',
			src: '/stack/styled.svg'
		},
		{
			name: 'Git',
			src: '/stack/git.svg'
		},
		{
			name: 'Figma',
			src: '/stack/figma.svg'
		},
		{
			name: 'Netlify',
			src: '/stack/netlify.svg'
		}
	];

	let skills = [
		'Frontend Development',
		'RESTful API',
		'Database Design',
		'Data Structures & Algorithms',
		'Clean Code',
		'Design Patterns',
		'TDD',
		'Agile Methodology',
		'Digital Product Design',
		'Communication & Teamwork'
	];
</script>

<Heading number="II" text="Expertise" />

<div
	class="container mt-6 flex-wrap items-baseline p-4 text-sm sm:flex sm:flex-row sm:gap-y-6 sm:gap-x-10 md:text-base xl:px-8"
>
	{#each skills as skill}
		<div class="inline first:text-xl xl:first:text-3xl sm:block">{skill}<span class="sm:hidden">. </span></div>
	{/each}
</div>

<div class="mt-8">
	<div class="m-scroll bg-gradient-to-r from-green-carribean via-yellow-beer to-magenta-cerise">
		<div class="m-scroll__title m-scroll__title--first">
			<div class="flex gap-8 p-4">
				{#each stacks as stack}
					<StackItem src={stack.src} name={stack.name} />
				{/each}
				{#each stacks as stack}
					<StackItem src={stack.src} name={stack.name} />
				{/each}
				{#each stacks as stack}
					<StackItem src={stack.src} name={stack.name} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.m-scroll {
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		position: relative;
		width: 100%;
		height: 8rem;
		margin: auto;
		overflow: hidden;
		z-index: 1;
	}

	.m-scroll__link:hover .m-scroll__title div {
		-webkit-animation-play-state: paused;
		animation-play-state: paused;
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
