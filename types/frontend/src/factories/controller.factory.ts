import { ArchiveProjectController } from '../controllers/archive.controller';
import { CreateProjectController } from '../controllers/create.controller';
import { UseCasesFactory } from './use-cases.factory';

export class ControllerFactory {

	static createProjectController(): CreateProjectController {
		return new CreateProjectController(
			UseCasesFactory.createProject(),
			UseCasesFactory.installCli(),
			UseCasesFactory.installUIComponents(),
			UseCasesFactory.installBootstrap(),
			UseCasesFactory.copyTemplates(),
		);
	}

	static arquiveProjectController(): ArchiveProjectController {
		return new ArchiveProjectController(
			UseCasesFactory.arquiveProject()
		);
	}

}
