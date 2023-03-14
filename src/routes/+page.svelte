<script>
	import Card from "$lib/Card.svelte";
	let posts = [
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	{
		"id": 1,
		"title": "title",
		"content": "i love you",
		"author": "brock",
		"group": "all"
	},
	
]

</script>
<div class="container h-full mx-auto flex justify-items-start items-center flex-col">
	<div class="sticky top-0 card p-4 m-4">
	<label class="label">
		<span>Input</span>
		<input class="input" type="text" placeholder="" />
	</label>
	</div>

	<div class="card p-4 flex gap-5 flex-wrap">
		<button class="card p-4">
			<header class="card-header">Add</header>
			<section class="p-4"><h1>➕</h1></section>
		</button>
	{#each posts as post}
			<Card {post}/>		
	{/each}
	</div>
</div>
