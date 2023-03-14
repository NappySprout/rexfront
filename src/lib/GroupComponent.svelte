<script>
  import { modalStore } from '@skeletonlabs/skeleton';
	import token from '$lib/stores/tokenStore';
	import { PUBLIC_BACKEND, PUBLIC_BACKEND_PORT } from '$env/static/public';
	const handleOnSubmit = async (e) => {
		const formData = new FormData(e.target);
		const name = formData.get('name');
		const description = formData.get('description');
		const res = await fetch(`http://${PUBLIC_BACKEND}:${PUBLIC_BACKEND_PORT}/api/group`, {
			method: 'POST',
			headers: {
        'Content-Type': 'application/json', Authorization: `Bearer ${$token}`
			},
			body: JSON.stringify({ name, description})
		});
		if (res.status === 200) {
			alert('group Added');
      modalStore.clear()
		} else {
			alert(await res.text());
		}
	};
</script>

<h1>Post</h1>
<form class="card p-4 m-8" on:submit|preventDefault={handleOnSubmit}>
	<label class="label">
		<span>group name</span><input name="name" class="input" type="text" placeholder="" />
	</label>
  <label class="label">
		<span>description</span><input name="description" class="input" type="text" placeholder="" />
	</label>
	<div class="flex justify-end">
		<button class="btn variant-filled-primary mt-5" type="submit">add group</button>
	</div>
</form>
