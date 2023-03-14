<script>
	import token from '$lib/stores/tokenStore';
	import { PUBLIC_BACKEND, PUBLIC_BACKEND_PORT } from '$env/static/public';
	const handleOnSubmit = async (e) => {
		const formData = new FormData(e.target);
		const name = formData.get('name');
		const password = formData.get('password');
		const res = await fetch(`http://${PUBLIC_BACKEND}:${PUBLIC_BACKEND_PORT}/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, password })
		});
		if (res.status === 200) {
			alert('logged in');
			$token = await res.json();
		} else {
			alert(await res.text());
		}
	};
</script>

<h1>Signup</h1>
<form class="card p-4 m-8" on:submit|preventDefault={handleOnSubmit}>
	<label class="label">
		<span>name</span>
		<input name="name" class="input" type="text" placeholder="" />
	</label>
	<label class="label">
		<span>password</span>
		<input name="password" class="input" type="password" placeholder="" />
	</label>
	<div class="flex justify-end">
		<button class="btn variant-filled-primary mt-5" type="submit">signup</button>
	</div>
</form>
