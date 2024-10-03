<script>
	import Header from '../components/Header.svelte';
</script>

<div class="main">
	<Header />
	<article>
		<slot />
	</article>
</div>

<svelte:head>
	<title>LAMBDA</title>
</svelte:head>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
	:global(*) {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	:global(:root) {
		--background-color: #fffaf0;
		--primary: #ff821b;
		--navbar-text: #000000;
		--text: #464646;
		--text80: rgba(70, 70, 70, 0.8);
		--text60: rgba(70, 70, 70, 0.6);
		--row-border: #351e0b13;
		--row-color: #fff9f5;
		--row-shadow: rgba(0, 0, 0, 0.041);
		--transaction-success-text: #159b20;
		--transaction-success-background: #2ab43521;
		--transaction-failed-text: #464646;
		--transaction-failed-background: #46464627;
	}

	:global(body) {
		font-family: 'Roboto', sans-serif;
		font-optical-sizing: auto;
		color: var(--text);
		background-color: var(--background-color);
	}

	:global(a) {
		color: var(--primary);
		text-decoration: none;
		transition: all 0.1s;

		&:hover {
			filter: brightness(70%);
		}
	}

	article {
		max-width: 1400px;
		margin: auto;
	}
</style>
