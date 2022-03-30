export const get = async (request) => {
	const { name } = request.params;

	const apiUrl = 'https://webhook.site/2f389de5-60ac-40f9-989d-b5f9f31fd6c1';
	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({ message: `Welcome ${name}, he just logged in to your website!` })
	});

	const json = await response.json();

	return {
		body: {
			name,
			json
		}
	};
};
