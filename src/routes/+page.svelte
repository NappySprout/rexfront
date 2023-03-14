<script>
	import Card from '$lib/Card.svelte';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { PUBLIC_BACKEND, PUBLIC_BACKEND_PORT } from '$env/static/public';
	import { onMount } from 'svelte';
	import PostComponent from '$lib/PostComponent.svelte';
	import GroupComponent from '$lib/GroupComponent.svelte';

	let posts = [];

	const seePosts = async (val) => {
		val = !val?"":val
		const res = await fetch(`http://${PUBLIC_BACKEND}:${PUBLIC_BACKEND_PORT}/view/posts?group=${val}`);
		posts = await res.json();
	} 
	const postModal = () => {
		modalStore.trigger({
			type: 'component',
			component: {ref: PostComponent},
			meta: {fn: seePosts }
		});
	}
	const groupModal = () => {
		modalStore.trigger({
			type: 'component',
			component: {ref: GroupComponent},
		});
	}
	let timer;
	const debounce = (v) => {
		clearTimeout(timer);
		timer = setTimeout(async () => {await seePosts(v)}, 750);
	};
	onMount(seePosts);
</script>

<div class="container h-full mx-auto flex justify-items-start items-center flex-col">
	<div class="sticky top-0 card p-4 m-4 z-[888] flex gap-4">
		<label class="label">
			<span>Input</span>
			<input class="input" type="text" on:keyup={({ target: { value } }) => debounce(value)} />
		</label>
		<button class="btn p-4 variant-ringed-tertiary" on:click={groupModal}>
			<section class="p-4">AddGroup <span>➕</span></section>
		</button>
	</div>

	<div class="card p-4 flex gap-5 flex-wrap">
		<button class="card p-4" on:click={postModal}>
			<header class="card-header">Add</header>
			<section class="p-4"><h1>➕</h1></section>
		</button>
		{#each posts as post}
			<Card {post} />
		{/each}
	</div>
</div>
