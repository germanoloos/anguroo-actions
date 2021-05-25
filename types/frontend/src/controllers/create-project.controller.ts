import { CreateProject } from "../core/usecases/create-project";
import { Project } from "../core/dto/project.dto";
import { AngularProvider, ANGULAR_KEY } from "../infra/providers/angular.provider";
import { InstallCommandLineInterface } from "../core/usecases/install-cli";
import { InstallUIComponents } from "../core/usecases/install-ui-components";
import { InstallBootstrap } from "../core/usecases/install-bootstrap";
import { CopyTemplates } from "../core/usecases/copy-templates";

export class CreateProjectController {
	constructor(
		private _createProject: CreateProject,
		private _installCli: InstallCommandLineInterface,
		private _installUIComponents: InstallUIComponents,
		private _installBootstrap: InstallBootstrap,
		private _copyTemplates: CopyTemplates
	) { }

	async create(project: Project) {
		switch (project.framework.name) {
			case ANGULAR_KEY:
				try {
					const provider = new AngularProvider(project);
					// await this._installCli.install(provider);
					// await this._createProject.create(provider);
					// if (project.framework.props.angularMaterial) {
					// 	await this._installUIComponents.install(provider);
					// }
					// if (project.framework.props.bootstrap) {
					// 	await this._installBootstrap.install(provider);
					// 	this._installBootstrap.importCss(provider);
					// }
					// if (project.framework.props.jquery) {
					// 	await this._installBootstrap.install(provider);
					// 	this._installBootstrap.importCss(provider);
					// }
					this._copyTemplates.copyTemplates(provider);
				} catch (error) {
					console.error(error);
				}
				break;
		}
	}

	parseAndCreate(params: any, body: Project) {
		this.create(body);
	}
}
