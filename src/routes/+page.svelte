<script>
	import Table from '$components/Table.svelte';
</script>

<div class="spacer"></div>

<h2 class="page-title">Transactions</h2>
<hr />

<Table />

<style>
	.page-title {
		font-weight: normal;
	}
	.spacer {
		margin: 36px 0;
	}
	hr {
		border: none;
		border-top: 1px solid var(--row-border);
		margin: 16px 0 22px;
	}
</style>
