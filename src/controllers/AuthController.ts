import crypto from 'crypto';
import { type Express, type Request, type Response, Router } from 'express';

import { get } from '~/common/config';
import { success } from '~/common/serverResponse';
import { base64URLEncode } from '~/utils/base64URL';

class AuthController {
	private readonly app: Express;

	constructor(app: Express) {
		this.app = app;
		this.setupRouter('auth');
	}

	setupRouter(resource: string) {
		const router = Router();
		this.app.use(`/${resource}`, router);

		router.post('/login', this.login);
	}

	login(req: Request, res: Response) {
		const jwtHeader = {
			alg: 'HS256',
			typ: 'JWT',
		};
		const jwtPayload = {
			sub: '1234567890',
		};

		const encodedJWTHeader = base64URLEncode(JSON.stringify(jwtHeader));
		const encodedJWTPayload = base64URLEncode(JSON.stringify(jwtPayload));

		const hmac = crypto.createHmac('sha256', get('JWT_SECRET_KEY'));
		const jwtSignature = hmac.update(JSON.stringify(jwtPayload)).digest('base64url');
		const token = `${encodedJWTHeader}.${encodedJWTPayload}.${jwtSignature}`;

		return success(res, {
			data: {
				token,
			},
		});
	}
}

export default AuthController;
