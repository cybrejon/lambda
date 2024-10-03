<script>
	import { transactions } from '$userStores/transactions.store';
</script>

<table>
	<thead>
		<tr class="table-header-row">
			<th scope="col">TXN</th>
			<th scope="col">Status</th>
			<th scope="col">Block</th>
			<th scope="col">Age</th>
			<th scope="col">From</th>
			<th scope="col">Contract</th>
			<th scope="col">Method</th>
			<th scope="col">Fees</th>
		</tr>
	</thead>
	<tbody>
		{#each $transactions as transaction}
			<tr>
				<td class:transaction-failed-row={transaction.status === 'FAILED'}
					><a href="/">{transaction.hash.slice(0, 5) + '...' + transaction.hash.slice(-5)}</a></td
				>
				<td class:transaction-failed-row={transaction.status === 'FAILED'}>
					<span
						class="transaction"
						class:transaction-success={transaction.status === 'SUCCESS'}
						class:transaction-failed={transaction.status === 'FAILED'}
					>
						{transaction.status}
					</span>
				</td>
				<td class:transaction-failed-row={transaction.status === 'FAILED'}>{transaction.block}</td>
				<td class:transaction-failed-row={transaction.status === 'FAILED'}>{transaction.date}</td>
				<td class:transaction-failed-row={transaction.status === 'FAILED'}
					><a href="/">{transaction.txHash.slice(0, 5) + '...' + transaction.txHash.slice(-5)}</a
					></td
				>
				<td class:transaction-failed-row={transaction.status === 'FAILED'}>{transaction.type}</td>
				<td class:transaction-failed-row={transaction.status === 'FAILED'}>{transaction.action}</td>
				<td class:transaction-failed-row={transaction.status === 'FAILED'}>{transaction.value}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		color: var(--text);
		width: 100%;
		border-collapse: separate;
		border-spacing: 0 12px;
	}

	th {
		text-align: left;
		padding: 18px 0;
		/* font-weight: normal; */
		font-size: 0.9rem;
		color: var(--text80);

		&:first-child {
			padding-left: 16px;
		}
		&:last-child {
			padding-right: 16px;
			text-align: right;
		}
	}

	tr:not(.table-header-row) {
		box-shadow: 0 2px 5px var(--row-shadow);
		border-radius: 7px;
	}

	td {
		background-color: var(--row-color);
		padding: 12px 0;
		border-top: 1px solid var(--row-border);
		border-bottom: 1px solid var(--row-border);

		&:first-child {
			border-radius: 8px 0 0 8px;
			border-left: 1px solid var(--row-border);
			padding-left: 16px;
		}
		&:last-child {
			text-align: right;
			border-radius: 0 8px 8px 0;
			padding-right: 16px;
			border-right: 1px solid var(--row-border);
		}
	}

	tr {
		border: 1px solid;
	}

	.transaction {
		font-weight: 500;
		font-size: 0.8rem;
		padding: 5px 15px;
		letter-spacing: 0.5px;
		border-radius: 100px;
	}

	.transaction-success {
		background-color: var(--transaction-success-background);
		color: var(--transaction-success-text);
	}
	.transaction-failed {
		background-color: var(--transaction-failed-background);
		color: var(--transaction-failed-text);
	}

	.transaction-failed-row {
		opacity: 0.7;
		filter: contrast(95%);
	}
</style>
