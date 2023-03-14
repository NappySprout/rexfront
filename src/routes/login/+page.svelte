<script>
	import token from '$lib/stores/tokenStore';
	import { PUBLIC_BACKEND, PUBLIC_BACKEND_PORT } from '$env/static/public';
	const logout = () => {
		alert('you have logged out');
		$token = '';
	};
	const handleOnSubmit = async (e) => {
		const formData = new FormData(e.target);
		const name = formData.get('name');
		const password = formData.get('password');
		const res = await fetch(`http://${PUBLIC_BACKEND}:${PUBLIC_BACKEND_PORT}/auth/login`, {
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

<h1>Login</h1>
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
		<button class="btn variant-filled-primary mt-5" type="submit">login</button>
	</div>
</form>
{#if $token != ''}
	<button class="btn" on:click={logout}> logout</button>
{/if}
