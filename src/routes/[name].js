export const get = async (request) => {
	const { name } = request.params;

	const apiUrl = 'https://webhook.site/bfdd2cfe-78be-483e-ae2e-e3e20ddaaff6';
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
