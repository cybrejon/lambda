<script>
	import Icon from '@iconify/svelte';
</script>

<div class="table-controls">
	<p class="information">Showing 30 of 2,530,154,242 transactions found</p>
	<div class="controls-wrapper">
		<div class="controls">
			<div class="pagination">
				<button class="disabled" type="button"
					><Icon icon="ic:baseline-first-page" style="font-size: 1.2rem;" /></button
				>
				<button class="disabled" type="button"
					><Icon icon="ic:baseline-chevron-left" style="font-size: 1.2rem;" /></button
				>
				<button type="button"
					><Icon icon="ic:baseline-chevron-right" style="font-size: 1.2rem;" /></button
				>
				<button type="button"
					><Icon icon="ic:baseline-last-page" style="font-size: 1.2rem;" /></button
				>
			</div>
		</div>
		<p class="page-indicator">1 - 1890</p>
	</div>
</div>

<style>
	button {
		border: 1px solid var(--row-border);
		background-color: var(--row-color);
		padding: 6px 12px 3px;
		border-radius: 8px;
		box-shadow: 0 2px 5px var(--row-shadow);
		transition: all 0.2s;
		outline-offset: 2px;
		outline: 2px solid transparent;

		&:hover {
			background-color: var(--primary);
			color: var(--background-color);
		}
		&:active {
			outline-color: var(--primary);
		}
	}

	.table-controls {
		font-size: 0.9rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.controls-wrapper {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 20px;
	}

	.disabled {
		pointer-events: none;
		filter: contrast(95%);
		opacity: 0.7;
	}
</style>
