import { LoggerRepository } from "../../core/repositories/logger.repository";

export class ConsoleRepository implements LoggerRepository {
	constructor() { }

	info(log: string, id: string): void {
		console.log(log, id);
	}
	warn(log: string, id: string): void {
		console.warn(log, id);
	}
	error(log: string, id: string): void {
		console.error(log, id);
	}
}
