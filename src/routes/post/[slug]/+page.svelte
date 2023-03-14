<script>
	import token from '$lib/stores/tokenStore';
	import { page } from '$app/stores';
	import Card from '$lib/Card.svelte';
	import { PUBLIC_BACKEND, PUBLIC_BACKEND_PORT } from '$env/static/public';
	import { onMount } from 'svelte';
	import AddComment from '$lib/AddComment.svelte';
	let comments = [];
	onMount(async () => {
		const res = await fetch(
			`http://${PUBLIC_BACKEND}:${PUBLIC_BACKEND_PORT}/view/comments?postid=${$page.params.slug}`
		);
		comments = await res.json();
	});

	const handleOnSubmit = async (e) => {
		const formData = new FormData(e.target);
		const content = formData.get('comment');
		const res = await fetch(`http://${PUBLIC_BACKEND}:${PUBLIC_BACKEND_PORT}/api/comment`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', Authorization: `Bearer ${$token}`
			},
			body: JSON.stringify({ content, postid: $page.params.slug })
		});
		if (res.status === 200) {
			alert('commented');
			const res = await fetch(
				`http://${PUBLIC_BACKEND}:${PUBLIC_BACKEND_PORT}/view/comments?postid=${$page.params.slug}`
			);
			comments = await res.json();
		} else {
			alert(await res.text());
		}
	};
</script>

<div class="flex justify-around p-4 m-8 card items-center">
	<Card />
	<div class="flex h-96 overflow-auto flex-col gap-4 p-4">
		{#each comments as comment}
			<div class="card p-4 max-w-lg">
				<h6>{comment.author}:</h6>
				<span class="break-words">{comment.content}</span>
			</div>
		{/each}
	</div>
</div>
<AddComment {handleOnSubmit} />
