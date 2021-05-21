import { LoggerRepository } from "../../core/repositories/logger.repository";

export class LoggerApiRepository implements LoggerRepository {
	constructor() { }

	info(log: string, id: string): void {
		console.log(log);
	}
	warn(log: string, id: string): void {
		console.warn(log);
	}
	error(log: string, id: string): void {
		console.error(log);
	}

	// const params: NewsParams = {
	// 	q: subject,
	// 	from: format(referenceDate, 'yyyy-MM-dd'),
	// 	sortBy: 'popularity',
	// 	apiKey: newsToken,
	// };
	// const result: AxiosResponse = await axios.get(`${searchURL}`, { params });
	// return result.data;
}
