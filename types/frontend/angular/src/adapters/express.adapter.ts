export class ExpressAdapter {
	static adapt(fn: (params: any, body: any) => void) {
		return async (req: { params: any; body: any; }, res: { sendStatus: (arg0: number) => void; }) => {
			await fn(req.params, req.body);
			res.sendStatus(200);
		};
	}
}
