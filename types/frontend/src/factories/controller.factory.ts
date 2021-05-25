import { CreateProjectController } from '../controllers/create-project.controller';
import { UseCasesFactory } from './use-cases.factory';

export class ControllerFactory {

	static createProjectController(): CreateProjectController {
		return new CreateProjectController(
			UseCasesFactory.createProject(),
			UseCasesFactory.installCli(),
			UseCasesFactory.installUIComponents(),
			UseCasesFactory.installBootstrap(),
			UseCasesFactory.copyTemplates()
		);
	}

}
