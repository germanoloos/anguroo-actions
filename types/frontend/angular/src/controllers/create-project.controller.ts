import { CreateProject } from "../core/usecases/create-project";
import { Project } from "../core/dto/project.dto";
import { AngularProvider, ANGULAR_KEY } from "../infra/providers/angular.provider";
import { InstallCommandLineInterface } from "../core/usecases/install-cli";
import { InstallUIComponents } from "../core/usecases/install-ui-components";

export class CreateProjectController {
	constructor(
		private _createProject: CreateProject,
		private _installCli: InstallCommandLineInterface,
		private _installUIComponents: InstallUIComponents,
	) { }

	async create(project: Project) {
		switch (project.framework.name) {
			case ANGULAR_KEY:
				try {
					const provider = new AngularProvider(project);
					await this._installCli.install(provider);
					await this._createProject.create(provider);
					// await this._installUIComponents.install(provider);
				} catch (error) {
					console.error(error);
				}
				break;

		}
	}
}
