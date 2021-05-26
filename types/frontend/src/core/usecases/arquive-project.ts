import { Project } from "../dto/project.dto";
import { ArquiveRepository } from "../repositories/arquive.repository";
import { LoggerRepository } from "../repositories/logger.repository";

export class ArquiveProject {

	constructor(private readonly _arquiveRepository: ArquiveRepository, private readonly _loggerRepository: LoggerRepository) { }

	async arquive(project: Project) {
		await this._arquiveRepository.compress(project, this._loggerRepository);
		await this._arquiveRepository.arquive(project, this._loggerRepository);
	}
}