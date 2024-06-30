import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

import AuthController from '~/controllers/AuthController';

dotenv.config({
	path: process.env.TS_NODE_DEV ? `.env.development` : `.env.production`,
});

const bootstrap = async () => {
	const app = express();

	app.use(express.static(path.join(path.resolve(), 'public')));

	new AuthController(app);

	app.listen(3000, () => {
		console.log('App listening at port 3000');
	});
};

void bootstrap();
