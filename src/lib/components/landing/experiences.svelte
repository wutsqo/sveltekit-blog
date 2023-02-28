<script lang="ts">
	import ExperiencesItem from './experiences-item.svelte';
	import Heading from './heading.svelte';

	let experiences = [
		{
			id: 1,
			title: 'Software Engineer Intern',
			company: 'Rey.id',
			date: 'Jan 2023 — Present',
			desc: [
				'Description coming soon...'
			]
		},
		{
			id: 2,
			title: 'Software Engineer',
			company: 'Moflip',
			date: 'Mar 2022 — Oct 2022',
			desc: [
				'Developed various landing pages for specific partnership events/campaigns.',
				'Developed admin dashboard for internal uses.',
				'Developed the frontend part of TiketNFT.com and Bolafy Apps.'
			]
		},
		// {
		// 	id: 3,
		// 	title: 'Teaching Assistant',
		// 	company: 'Fasilkom UI',
		// 	date: 'Aug 2021 — Jun 2022',
		// 	desc: [
		// 		'TA for Platform-Based Programming Course (Term 1 & 2, AY 2021/2022)',
		// 		'Assisted students in learning the course material and assignments.',
		// 		'Graded students’ group and individual assignments, and lab sessions.'
		// 	]
		// },
		{
			id: 3,
			title: 'Web Developer',
			company: 'Purwalenta.com',
			date: 'Dec 2021 — Mar 2022',
			desc: [
				'Worked directly with co-founders in designing and developing the Purwalenta web app.',
				'Refactored and migrated the legacy codebase to a more maintainable and scalable codebase.'
			]
		},
		{
			id: 4,
			title: 'Web Developer',
			company: 'Fasilkom UI',
			date: 'Oct 2021 — Dec 2021',
			desc: [
				'Developed new features of an internal app for the faculty to manage the thesis submission process.',
				'Features include: the new revision system, assessment report generator, and revamped admin dashboard.'
			]
		},
		{
			id: 5,
			title: 'Web Developer',
			company: 'Ristek Fasilkom UI',
			date: 'Mar 2021 - Feb 2022',
			desc: [
				'Developed REST API for the onboarding platform for the new students of the faculty.',
				'Won the 1st place winner of the Technology Euphoria Web Development Competition 2021.'
			]
		}
	];

	let selected = 1;
</script>

<Heading number="III" text="Professional Experiences" />

<div class="grid grid-cols-1 gap-4 p-4 xl:grid-cols-2 xl:px-8">
	<div class="divide flex flex-col divide-y-2 divide-black">
		{#each experiences as experience}
			<ExperiencesItem
				{experience}
				open={selected === experience.id}
				on:click={() => {
					selected = experience.id;
				}}
			/>
		{/each}
		<hr class="divide-x-2" />
	</div>
	<div class="hidden border-2 border-black p-4 xl:block xl:px-6">
		<div class="text-xl font-semibold">
			{experiences[selected - 1].title} @
			<span class="font-normal"> {experiences[selected - 1].company}</span>
		</div>
		<div class="text-sm text-gray-500">{experiences[selected - 1].date}</div>
		<ul class="mt-6 list-inside list-disc">
			{#each experiences[selected - 1].desc as desc}
				<li>{desc}</li>
			{/each}
		</ul>
	</div>
</div>
