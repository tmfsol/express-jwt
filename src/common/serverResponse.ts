import { type Response } from 'express';
import StatusCode from 'http-status-codes';

export const success = (res: Response, payload?: { message?: string; data?: any }) => {
	const message = payload?.message ?? StatusCode.getStatusText(StatusCode.OK);
	const data = payload?.data || null;

	return res.status(StatusCode.OK).json({
		message,
		data,
	});
};

export const error = (res: Response, payload?: { message?: string; error?: any }) => {
	const message = payload?.message ?? StatusCode.getStatusText(StatusCode.BAD_REQUEST);
	const error = payload?.error || null;

	return res.status(StatusCode.OK).json({
		message,
		error,
	});
};
