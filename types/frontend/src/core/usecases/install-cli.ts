import { FramewordProvider } from "../providers/framework.provider";
import { LoggerRepository } from "../repositories/logger.repository";
import { TerminalRepository } from "../repositories/terminal.repository";

export class InstallCommandLineInterface {

	constructor(private readonly _terminalRepository: TerminalRepository, private readonly _loggerRepository: LoggerRepository) { }

	async install(framework: FramewordProvider) {
		try {
			return this._terminalRepository.run(framework.addCli(), framework.getProject().id, this._loggerRepository);
		} catch (error) {
			console.error(error);
		}
		return;
	}
}