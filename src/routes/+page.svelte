<script>
	import Fa from 'svelte-fa';
	import { faUser } from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import Carousel from 'svelte-carousel';

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
			title: repo.name,
			description: repo.description
		}));
</script>

<div class="hero min-h-[75vh] bg-base-100 py-[12rem] relative">
	<div
		class="breathe-delayed circle absolute -top-20 -left-10 w-64 h-64 bg-white rounded-full shadow-2xl hover:rounded-[45%]"
	/>
	<div class="hero-content text-center" style="z-index: 2;">
		<div class="max-w-2xl bg-primary text-white rounded-2xl py-10 px-5">
			<h1 class="text-5xl font-bold uppercase italic">NOACS Research Group</h1>
			<p class="py-6">The NOACS is a research group in...</p>
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
				<p class="text-lg text-justify">
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
		<div class="grid grid-cols-1 gap-8 max-w-3xl md:grid-cols-3">
			<div class="flex items-center justify-center md:col-span-2 md:pr-[5rem]">
				<div class="carousel w-full overflow-hidden">
					{#each cards as card, i}
						<div
							id="item{i}"
							class="carousel-item w-full card-body relative bg-base-100 rounded-xl min-h-[15rem]"
						>
							<h2 class="card-title">{card.title}</h2>
							<p>{card.description}</p>
							<div class="absolute top-0 right-0 mt-4 mr-4">
								<figure><Fa icon={faGithub} size="2.25x" /></figure>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="flex items-center justify-center">
				<div class="text-6xl font-bold text-center italic uppercase">Our Projects</div>
			</div>
		</div>
	</div>
</div>

<div class="min-h-max py-20 bg-base-100">
	<h1 class="text-5xl font-bold text-center pb-10 italic uppercase">The Group</h1>
	<div class="flex flex-wrap justify-center px-4">
		<div
			class="card w-64 bg-base-100 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:shadow-2xl m-4 rounded-2xl"
		>
			<figure class="py-5"><Fa icon={faUser} size="5x" /></figure>
			<div class="card-body bg-primary text-neutral-content rounded-t-md rounded-b-2xl">
				<h2 class="card-title">Martin Gerdin Wärnberg</h2>
				<p><b>Role:</b> test role</p>
			</div>
		</div>

		<div
			class="card w-64 bg-base-100 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:shadow-2xl m-4 rounded-2xl"
		>
			<figure class="py-5"><Fa icon={faUser} size="5x" /></figure>
			<div class="card-body bg-primary text-neutral-content rounded-t-md rounded-b-2xl">
				<h2 class="card-title">Martin Gerdin Wärnberg</h2>
				<p><b>Role:</b> test role</p>
			</div>
		</div>

		<div
			class="card w-64 bg-base-100 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:shadow-2xl m-4 rounded-2xl"
		>
			<figure class="py-5"><Fa icon={faUser} size="5x" /></figure>
			<div class="card-body bg-primary text-neutral-content rounded-t-md rounded-b-2xl">
				<h2 class="card-title">Martin Gerdin Wärnberg</h2>
				<p><b>Role:</b> test role</p>
			</div>
		</div>

		<div
			class="card w-64 bg-base-100 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:shadow-2xl m-4 rounded-2xl"
		>
			<figure class="py-5"><Fa icon={faUser} size="5x" /></figure>
			<div class="card-body bg-primary text-neutral-content rounded-t-md rounded-b-2xl">
				<h2 class="card-title">Martin Gerdin Wärnberg</h2>
				<p><b>Role:</b> test role</p>
			</div>
		</div>

		<div
			class="card w-64 bg-base-100 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:shadow-2xl m-4 rounded-2xl"
		>
			<figure class="py-5"><Fa icon={faUser} size="5x" /></figure>
			<div class="card-body bg-primary text-neutral-content rounded-t-md rounded-b-2xl">
				<h2 class="card-title">Martin Gerdin Wärnberg</h2>
				<p><b>Role:</b> test role</p>
			</div>
		</div>
	</div>
</div>

<div class="bg-primary text-white">
	<h1 class="text-5xl font-bold text-center py-10 italic uppercase">Bibliography</h1>
	<div class="join join-vertical w-full">
		<div class="collapse collapse-arrow join-item border border-base-300">
			<input type="radio" name="my-accordion-4" />
			<div class="collapse-title text-xl font-medium">Example publication 1</div>
			<div class="collapse-content">
				<p>information about publication</p>
			</div>
		</div>

		<div class="collapse collapse-arrow join-item border border-base-300">
			<input type="radio" name="my-accordion-4" />
			<div class="collapse-title text-xl font-medium">Example publication 2</div>
			<div class="collapse-content">
				<p>information about publication</p>
			</div>
		</div>

		<div class="collapse collapse-arrow join-item border border-base-300">
			<input type="radio" name="my-accordion-4" />
			<div class="collapse-title text-xl font-medium">Example publication 3</div>
			<div class="collapse-content">
				<p>information about publication</p>
			</div>
		</div>

		<div class="collapse collapse-arrow join-item border border-base-300">
			<input type="radio" name="my-accordion-4" />
			<div class="collapse-title text-xl font-medium">Example publication 3</div>
			<div class="collapse-content">
				<p>information about publication</p>
			</div>
		</div>

		<div class="collapse collapse-arrow join-item border border-base-300">
			<input type="radio" name="my-accordion-4" />
			<div class="collapse-title text-xl font-medium">Example publication 4</div>
			<div class="collapse-content">
				<p>information about publication</p>
			</div>
		</div>

		<div class="collapse collapse-arrow join-item border border-base-300">
			<input type="radio" name="my-accordion-4" />
			<div class="collapse-title text-xl font-medium">Example publication 5</div>
			<div class="collapse-content">
				<p>information about publication</p>
			</div>
		</div>
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
