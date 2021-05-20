import { UnixTerminal } from "../../commands/unix.comand";
import { LoggerRepository } from "../../core/repositories/logger.repository";
import { TerminalRepository } from "../../core/repositories/terminal.repository";

export class TerminalCommandRepository implements TerminalRepository {
	constructor () {}

	async run(command: string, projectId: string, logger: LoggerRepository) {
		return new UnixTerminal().run(command, projectId, logger);
	}
}
