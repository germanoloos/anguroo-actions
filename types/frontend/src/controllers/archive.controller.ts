import { Project } from "../core/dto/project.dto";
import { ArquiveProject } from "../core/usecases/arquive-project";

export class ArchiveProjectController {
	constructor(
		private readonly _arquiveProject: ArquiveProject,
	) { }

	async arquive(project: Project) {
		this._arquiveProject.arquive(project);
	}

}
