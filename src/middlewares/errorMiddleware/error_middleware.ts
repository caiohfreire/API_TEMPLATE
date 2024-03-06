import { NextFunction, Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import { error_response } from '../../services/error_service';
import { custom_request } from '../../models/utils.model';


export class error_middleware {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public handle(err: Error, req: Request, res: Response, next: NextFunction) {
		if (err instanceof error_response)
			return res.status(err.code).json({ message: err.message });

		return res.status(500).json({ erro: 'Internal Server Error' });
	}

	public handleAsync =
		(fn: RequestHandler) =>
			async (req: custom_request, res: Response, next: NextFunction) => {
				try {
					await Promise.resolve(fn(req, res, next));
					next();
				} catch (err) {
					return next(err);
				}
			};
}