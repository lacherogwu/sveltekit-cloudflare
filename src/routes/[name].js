export const get = async (request) => {
	const { name } = request.params;

	return {
		body: {
			name
		}
	};
};
