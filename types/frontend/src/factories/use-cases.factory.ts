import { CreateProject } from '../core/usecases/create-project';
import { InstallCommandLineInterface } from '../core/usecases/install-cli';
import { InstallUIComponents } from '../core/usecases/install-ui-components';
import { RepositoryFactory } from './repository.factory';

export class UseCasesFactory {
	static createProject(): CreateProject {
		return new CreateProject(RepositoryFactory.getTerminalRepository(), RepositoryFactory.getLoggerRepository());
	}
	static installCli(): InstallCommandLineInterface {
		return new InstallCommandLineInterface(RepositoryFactory.getTerminalRepository(), RepositoryFactory.getLoggerRepository());
	}
	static installUIComponents(): InstallUIComponents {
		return new InstallUIComponents(RepositoryFactory.getTerminalRepository(), RepositoryFactory.getLoggerRepository());
	}
}
