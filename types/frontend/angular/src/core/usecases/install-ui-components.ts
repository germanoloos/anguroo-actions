import { Project } from "../dto/project.dto";
import { FramewordProvider } from "../providers/framework.provider";
import { LoggerRepository } from "../repositories/logger.repository";
import { TerminalRepository } from "../repositories/terminal.repository";

export class InstallUIComponents {

	constructor(private readonly _terminalRepository: TerminalRepository, private readonly _loggerRepository: LoggerRepository) { }

	async install(framework: FramewordProvider, project: Project) {
		try {
			return this._terminalRepository.run(framework.addUiComponent(project), project.id, this._loggerRepository);
		} catch (error) {
			console.error(error);
		}
		return;
	}
}