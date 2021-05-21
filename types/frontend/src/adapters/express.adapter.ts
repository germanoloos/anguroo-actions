export class ExpressAdapter {
	static adapt(fn: (params: any, body: any) => void) {
		return async (req: any, res: any) => {
			await fn(req.params, req.body);
			res.sendStatus(200);
		};
	}
}
