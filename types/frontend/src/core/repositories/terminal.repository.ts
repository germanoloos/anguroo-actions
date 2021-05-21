import { LoggerRepository } from "./logger.repository";

export interface TerminalRepository {
	run(commands: string[], projectId: string, logger: LoggerRepository): Promise<string>;
}

