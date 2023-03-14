<script>
	export let handleOnSubmit;
</script>

<h3>Add comment</h3>
<form class="card p-4 m-8" on:submit={handleOnSubmit}>
	<label class="label">
		<span>comment</span>
		<input name="comment" class="input" type="text" placeholder="" />
	</label>
	<div class="flex justify-end">
		<button class="btn variant-filled-primary mt-5" type="submit">comment</button>
	</div>
</form>
