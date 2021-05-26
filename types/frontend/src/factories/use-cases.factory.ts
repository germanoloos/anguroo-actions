import { ArquiveProject } from '../core/usecases/arquive-project';
import { CopyTemplates } from '../core/usecases/copy-templates';
import { CreateProject } from '../core/usecases/create-project';
import { InstallBootstrap } from '../core/usecases/install-bootstrap';
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
	static installBootstrap(): InstallBootstrap {
		return new InstallBootstrap(RepositoryFactory.getTerminalRepository(), RepositoryFactory.getLoggerRepository(), RepositoryFactory.getFileManagerRepository());
	}
	static copyTemplates(): CopyTemplates {
		return new CopyTemplates(RepositoryFactory.getFileManagerRepository());
	}
	static arquiveProject(): ArquiveProject {
		return new ArquiveProject(RepositoryFactory.getArquiveRepository(), RepositoryFactory.getLoggerRepository());
	}
}
