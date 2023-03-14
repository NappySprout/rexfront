<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { Modal} from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import Auth from '../lib/Auth.svelte';
</script>
<Modal/>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead"><h3>😜</h3></svelte:fragment>
			<h1><a href="/">REX</a></h1>
			<svelte:fragment slot="trail"><Auth /></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
</AppShell>
