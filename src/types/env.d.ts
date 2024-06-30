declare global {
	namespace NodeJS {
		interface ProcessEnv {
			TS_NODE_DEV: 'true' | 'false';
			JWT_SECRET_KEY: string;
		}
	}
}

export {};
