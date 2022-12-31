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
			name: 'Styled Component',
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
		'UI/UX Design',
		'Communication & Teamwork'
	];
</script>

<Heading number="II" text="Expertise" />

<div
	class="max-w-screen-lg mx-auto container sm:justify-center text-center sm:flex sm:flex-row flex-wrap sm:gap-y-6 sm:gap-x-10 mt-6 text-sm md:text-base p-4"
>
	{#each skills as skill}
		<div class="inline sm:block">{skill}<span class="sm:hidden">. </span></div>
	{/each}
</div>

<div class="max-w-screen-lg mx-auto px-4 container justify-center flex flex-wrap gap-8 mt-12">
	{#each stacks as stack}
		<StackItem src={stack.src} name={stack.name} />
	{/each}
</div>

<div class="text-center mt-8">++ and many more</div>
