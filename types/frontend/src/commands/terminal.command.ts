import { LoggerRepository } from "../core/repositories/logger.repository";

export interface TerminalCommand {
	run(commands: string[], projectId: string, logger: LoggerRepository): Promise<string>;
}
