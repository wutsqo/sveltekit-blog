<script lang="ts">
	import ExperiencesItem from './experiences-item.svelte';
	import Heading from './heading.svelte';

	let experiences = [
		{
			title: 'Software Engineer',
			company: 'Moflip',
			date: 'Mar 2022 — Oct 2022',
			desc: [
				'Developed various landing pages for specific partnership events/campaigns.',
				'Developed admin dashboard for internal uses.',
				'Developed the frontend part of TiketNFT.com and Bolafy Apps.'
			]
		},
		{
			title: 'Teaching Assistant',
			company: 'Faculty of Computer Science, UI',
			date: 'Aug 2021 — Jun 2022',
			desc: [
				'TA for Platform-Based Programming Course (Term 1 & 2, AY 2021/2022)',
				'Assisted students in learning the course material and assignments.',
				'Graded students’ group and individual assignments, and lab sessions.'
			]
		},
		{
			title: 'Web Developer',
			company: 'Purwalenta.com',
			date: 'Dec 2021 — Mar 2022',
			desc: [
				'Worked directly with co-founders in designing and developing the Purwalenta web app.',
				'Refactored and migrated the legacy codebase to a more maintainable and scalable codebase.'
			]
		},
		{
			title: 'Web Developer',
			company: 'Faculty of Computer Science, UI',
			date: 'Oct 2021 — Dec 2021',
			desc: [
				'Developed new features of an internal app for the faculty to manage the thesis submission process.',
				'Features include: the new revision system, assessment report generator, and revamped admin dashboard.'
			]
		},
		{
			title: 'Web Developer',
			company: 'Ristek Fasilkom UI',
			date: 'Mar 2021 - Feb 2022',
			desc: [
				'Developed REST API for the onboarding platform for the new students of the faculty.',
				'Won the 1st place winner of the Technology Euphoria Web Development Competition 2021.'
			]
		}
	];
</script>

<Heading number="III" text="Professional Experiences" />

<div class="flex flex-col w-full max-w-3xl m-4 mx-auto divide-y-2 divide-black px-4 divide">
	{#each experiences as experience}
		<ExperiencesItem {experience} />
	{/each}
	<hr class="divide-x-2" />
</div>
