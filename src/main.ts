import express from 'express';
import path from 'path';

const bootstrap = async () => {
	const app = express();

	app.use(express.static(path.join(path.resolve(), 'public')));

	app.listen(3000, () => {
		console.log('App listening at port 3000');
	});
};

void bootstrap();
