import { LoggerRepository } from "../core/repositories/logger.repository";

export interface TerminalCommand {
	run(command: string, projectId: string, logger: LoggerRepository): Promise<string>;
}
