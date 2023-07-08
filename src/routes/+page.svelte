<script>
	import Fa from 'svelte-fa';
	import { faUser, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faOrcid } from '@fortawesome/free-brands-svg-icons';
	import Carousel from 'svelte-carousel';

	import members from '$data/members.json';
	import publications from '$data/publications.json';

	let carousel; // for calling methods of the carousel instance
	const handleNextClick = () => {
		carousel.goToNext();
	};

	//	let cards = [
	//		{ title: 'Project 1', description: 'This is project 1' },
	//		{ title: 'Project 2', description: 'This is project 2' },
	//		{ title: 'Project 3', description: 'This is project 3' },
	//		{ title: 'Project 4', description: 'This is project 4' },
	//		{ title: 'Project 5', description: 'This is project 5' }
	//	];

	/** @type {import('./$types').PageData} */
	export let data;

	// filter data for repos with the topic webrepo into a new array of objects called cards
	const cards = data.data
		.filter((repo) => repo.topics.includes('student-project'))
		.map((repo) => ({
			title: repo.name
				.replaceAll('-', ' ')
				.split(' ')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' '),
			description: repo.description,
			link: repo.html_url
		}));
</script>

<div class="hero min-h-[75vh] bg-base-100 py-[12rem] relative">
	<div
		class="breathe-delayed circle absolute -top-20 -left-10 w-64 h-64 bg-white rounded-full shadow-2xl hover:rounded-[45%]"
	/>
	<div class="hero-content text-center" style="z-index: 2;">
		<div class="max-w-2xl bg-primary text-white rounded-2xl py-10 px-5">
			<h1 class="text-5xl font-bold uppercase italic">NOACS Research Group</h1>
			<p class="py-6">The NOACS (No Accidents) is a research group in...</p>
		</div>
	</div>
	<div
		class="breathe circle absolute bottom-20 right-10 w-32 h-32 bg-white rounded-full shadow-2xl hover:rounded-[45%]"
	/>
	<div
		class="breathe-delayed circle absolute bottom-5 left-[25rem] w-40 h-40 bg-primary rounded-full shadow-2xl hover:rounded-[45%]"
	/>
	<div
		class="breathe circle absolute -top-[15rem] right-10 w-52 h-52 bg-primary rounded-full shadow-2xl hover:rounded-[45%]"
	/>
	<div
		class="breathe-delayed circle absolute -top-[15rem] left-[40rem] w-72 h-72 bg-white rounded-full shadow-2xl hover:rounded-[45%]"
	/>
	<div
		class="breathe-delayed circle absolute -top-[5rem] right-[30rem] w-[15rem] h-[15rem] bg-primary rounded-full shadow-2xl hover:rounded-[45%]"
	/>
	<div
		class="breathe circle absolute bottom-[2rem] left-[45rem] w-[15rem] h-[15rem] bg-white rounded-full shadow-2xl hover:rounded-[45%]"
	/>
</div>

<div class="bg-primary text-white py-[6rem] relative mt-[75vh]">
	<div class="flex justify-center">
		<div class="grid grid-cols-1 gap-8 max-w-3xl md:grid-cols-3">
			<div class="flex items-center justify-center">
				<div class="text-6xl font-bold text-center italic uppercase">Our Focus</div>
			</div>
			<div class="col-span-2">
				<p class="text-lg text-justify p-[1rem]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed semper ligula. Phasellus
					et ante lectus. Proin tincidunt odio eu posuere pharetra. Morbi lacinia turpis nec risus
					maximus, ac malesuada erat pharetra. Nulla facilisi. Vestibulum ante ipsum primis in
					faucibus orci luctus et ultrices posuere cubilia Curae; Nunc sed feugiat nulla. Fusce
					dignissim diam ut nunc pellentesque, non hendrerit tellus bibendum. Donec sed sapien in
					mauris mollis hendrerit a vitae dui.
				</p>
			</div>
		</div>
	</div>
</div>

<div class="bg-secondary text-secondary-content py-[6rem]">
	<div class="flex justify-center">
		<div class="grid grid-cols-5 gap-8 max-w-3xl">
			<!-- Only visible on small devices -->
			<div class="flex items-center justify-center sm:hidden col-span-5">
				<div class="text-6xl font-bold text-center italic uppercase">Our Projects</div>
			</div>

			<div class="col-span-5 md:col-span-3">
				<Carousel autoplay autoplayDuration={6000} bind:this={carousel} pauseOnFocus>
					{#each cards as card}
						<a href={card.link} target="_blank" rel="noopener noreferrer">
							<div class="card-body relative bg-base-100 rounded-xl min-h-[15rem]">
								<h2 class="card-title">{card.title}</h2>
								<p>{card.description}</p>
								<div class="absolute top-0 right-0 mt-4 mr-4">
									<figure><Fa icon={faGithub} size="2.25x" /></figure>
								</div>
							</div>
						</a>
					{/each}
				</Carousel>
			</div>

			<!-- Only visible on large devices -->
			<div class="flex items-center justify-center hidden sm:flex px-[3rem] col-span-2">
				<div class="text-6xl font-bold text-center italic uppercase">Our Projects</div>
			</div>
		</div>
	</div>
</div>

<div class="min-h-max py-20 bg-base-100">
	<h1 class="text-5xl font-bold text-center pb-10 italic uppercase">The Group</h1>
	<div class="flex flex-wrap justify-center px-4">
		{#each members as member}
			<div
				class="card w-[18rem] bg-base-100 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:shadow-2xl m-4 rounded-2xl"
			>
				<figure class="py-5"><Fa icon={faUser} size="5x" /></figure>
				<div class="card-body bg-primary text-neutral-content rounded-t-md rounded-b-2xl">
					<h2 class="card-title -mt-[0.5rem]">
						{#if member.orcid}
							<a
								style="display: inline-flex; align-items: center;"
								href={member.orcid}
								target="_blank"
								rel="noopener noreferrer"
							>
								{member.name}<Fa icon={faOrcid} size="0.9x" class="ml-1 mt-1" />
							</a>
						{:else}
							{member.name}
						{/if}
					</h2>
					<ul style="list-style: none;">
						<li><b>Role:</b> {member.role}</li>
						<li><b>Occupation:</b> {member.occupation}</li>
						<li><b>Affiliation:</b> {member.affiliation}</li>
					</ul>
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="bg-primary text-white">
	<h1 class="text-5xl font-bold text-center py-10 italic uppercase">Bibliography</h1>
	<div class="join join-vertical w-full">
		{#each publications as publication}
			<div class="collapse collapse-arrow join-item border border-base-300">
				<input type="radio" name="publication-accordion" />
				<div class="collapse-title text-xl font-medium">{publication.title}</div>
				<div class="collapse-content">
					<p class="-mt-5"><i>{publication.journal}</i></p>
					<div class="pb-5">
						{#each publication.tags as tag}
							<div class="badge badge-outline rounded-lg mr-2">{tag}</div>
						{/each}
					</div>

					<div>
						<p>{@html publication.description}</p>
						<br />
						<p>{publication.authors}</p>
					</div>

					<p>
						<br />
						<a
							role="button"
							class="btn btn-outline text-white"
							href={publication.link}
							target="_blank"
							rel="noopener noreferrer"
							>Link <figure class="pb-[0.2rem] pl-[0.1rem]">
								<Fa icon={faArrowUpRightFromSquare} size="1.25x" />
							</figure>
						</a>
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	@keyframes breathe {
		0%,
		100% {
			transform: scale(1);
			box-shadow: inset -25px -25px 40px rgba(0, 0, 0, 0.2);
		}
		50% {
			transform: scale(1.2);
			box-shadow: inset -0px -50px 40px rgba(0, 0, 0, 0.15);
		}
	}
	.breathe {
		animation: breathe 8s ease-in-out infinite;
		box-shadow: inset -25px -25px 40px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	.breathe-delayed {
		animation: breathe 10s ease-in-out infinite;
		box-shadow: inset -25px -25px 40px rgba(0, 0, 0, 0.2);
		animation-delay: 1.5s;
		z-index: 1;
	}

	.hero {
		position: fixed;
		width: 100%;
		z-index: -1;
	}
</style>
