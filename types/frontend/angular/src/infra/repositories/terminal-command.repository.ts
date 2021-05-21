import { UnixTerminal } from "../../commands/unix.comand";
import { WindowsTerminal } from "../../commands/windows.comand";
import { LoggerRepository } from "../../core/repositories/logger.repository";
import { TerminalRepository } from "../../core/repositories/terminal.repository";

export class TerminalCommandRepository implements TerminalRepository {
	constructor() { }

	async run(commands: string[], projectId: string, logger: LoggerRepository) {
		return process.platform === "win32" ? new WindowsTerminal().run(commands, projectId, logger) :
			new UnixTerminal().run(commands, projectId, logger);
	}
}
