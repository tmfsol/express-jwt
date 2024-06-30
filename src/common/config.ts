export const get = (key: string) => {
	return process.env[key] ?? '';
};
