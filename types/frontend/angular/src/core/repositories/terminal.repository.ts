import { LoggerRepository } from "./logger.repository";

export interface TerminalRepository {
	run(command: string, projectId: string, logger: LoggerRepository): Promise<string>;
}

