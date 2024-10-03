<script>
	import logo from '$assets/logo.svg';
</script>

<nav class="header">
	<div class="logo-container">
		<img class="logo" src={logo} alt="logo" />
	</div>
	<div class="navbar">
		<a href="/">Points</a>
		<a class="active" href="/">Transactions</a>
		<a href="/">Contracts</a>
		<a href="/">Token</a>
	</div>
</nav>

<style>
	.header {
		max-width: 1400px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: auto;
		padding: 10px 0;
	}
	.logo {
		width: 160px;
		display: block;
	}

	.navbar {
		display: flex;
		align-items: flex-end;
		gap: 10px;
	}

	.navbar {
		& a {
			padding: 15px 9px;
			text-decoration: none;
			color: var(--navbar-text);
			font-weight: 400;

			&.active {
				color: var(--primary);
			}
		}
	}
</style>
