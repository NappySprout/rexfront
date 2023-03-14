<script>
  import { modalStore } from '@skeletonlabs/skeleton';
	import token from '$lib/stores/tokenStore';
	import { PUBLIC_BACKEND, PUBLIC_BACKEND_PORT } from '$env/static/public';
	const handleOnSubmit = async (e) => {
		const formData = new FormData(e.target);
		const group = formData.get('group');
		const title = formData.get('title');
    const content = formData.get('content');
		const res = await fetch(`http://${PUBLIC_BACKEND}:${PUBLIC_BACKEND_PORT}/api/post`, {
			method: 'POST',
			headers: {
        'Content-Type': 'application/json', Authorization: `Bearer ${$token}`
			},
			body: JSON.stringify({ group, title, content})
		});
		if (res.status === 200) {
			alert('Added');
      await $modalStore[0].meta.fn()
      modalStore.clear()
		} else {
			alert(await res.text());
		}
	};
</script>

<h1>Post</h1>
<form class="card p-4 m-8" on:submit|preventDefault={handleOnSubmit}>
	<label class="label">
		<span>group</span><input name="group" class="input" type="text" placeholder="" />
	</label>
	<label class="label">
		<span>title</span><input name="title" class="input" type="text" placeholder="" />
	</label>
  <label class="label">
		<span>content</span><input name="content" class="input" type="text" placeholder="" />
	</label>
	<div class="flex justify-end">
		<button class="btn variant-filled-primary mt-5" type="submit">post</button>
	</div>
</form>
