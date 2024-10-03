<script>
	import Table from '$components/Table.svelte';
	import TableControls from '$components/TableControls.svelte';
	import Footer from '$components/Footer.svelte';
	import Spacer from '$components/Spacer.svelte';
</script>

<Spacer />

<h2 class="page-title">Transactions</h2>
<hr />

<TableControls />
<Table />
<Spacer />
<TableControls />

<Spacer />

<Footer />

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
