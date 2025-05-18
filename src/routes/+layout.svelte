<script lang="ts">
	import Noise from '$lib/components/noise.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Noise />

{@render children()}
