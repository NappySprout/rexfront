<script>
	export let post = {
		id: 1,
		title: 'title',
		content: 'i love you',
		author: 'brock',
		group: 'all'
	};
</script>

<a href="/post/{post.id}" class="card p-4 variant-filled-surface card-hover">
	<div class="max-w-md">
	<header class="card-header">{post.group}:{post.title}</header>
	<section class="p-4">{post.content}</section>
	<footer class="card-footer">{post.author}</footer>
</div>
</a>
