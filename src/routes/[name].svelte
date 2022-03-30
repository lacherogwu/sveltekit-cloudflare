<script>
	export let name;
	export let json = {};

	const handleClick = async () => {
		const apiUrl = 'https://webhook.site/2f389de5-60ac-40f9-989d-b5f9f31fd6c1';
		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ message: `${name}, Just clicked THE button!` })
		});

		json = await response.json();
	};
</script>

<svelte:head>
	<title>Saying Hello to everyone! 🙋‍♂️ v2</title>
</svelte:head>
<h1>Hello {name}</h1>
<button on:click={handleClick}>Click Me</button>
<div>
	<h1>Response:</h1>
	<div>{JSON.stringify(json)}</div>
</div>
