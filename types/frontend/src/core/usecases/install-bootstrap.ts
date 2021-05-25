import { Project } from "../dto/project.dto";
import { FramewordProvider } from "../providers/framework.provider";
import { FileManagerRepository } from "../repositories/file-manager.repository";
import { LoggerRepository } from "../repositories/logger.repository";
import { TerminalRepository } from "../repositories/terminal.repository";

export class InstallBootstrap {

	constructor(
		private readonly _terminalRepository: TerminalRepository,
		private readonly _loggerRepository: LoggerRepository,
		private readonly _fileManagerRepository: FileManagerRepository
	) { }

	async install(framework: FramewordProvider) {
		try {
			return this._terminalRepository.run(framework.addBootstrap(), framework.getProject().id, this._loggerRepository);
		} catch (error) {
			console.error(error);
		}
		return;
	}

	importCss(framework: FramewordProvider) {
		framework.importBootstrap(this._fileManagerRepository);
	}
}