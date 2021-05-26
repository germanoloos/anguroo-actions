import { Project } from "../../core/dto/project.dto";
import { ArquiveRepository } from "../../core/repositories/arquive.repository";
import { LoggerRepository } from "../../core/repositories/logger.repository";
import { RepositoryFactory } from "../../factories/repository.factory";

export class ArquiveProjectRepository implements ArquiveRepository {
	constructor() { }
	compress(project: Project, logger: LoggerRepository): void {

		const file_system = require('fs');
		const archiver = require('archiver');
		const path = require('path');
		const archive = archiver('zip');

		const output = file_system.createWriteStream(`${path.dirname(require.main?.filename)}/../${project.name}.zip`);

		logger.info('Compressing project...', project.id);

		output.on('close', function () {
			logger.info(archive.pointer() + ' total bytes', project.id);
			logger.info('archiver has been finalized and the output file descriptor has closed.', project.id);
		});

		archive.on('error', (err: any) => {
			throw err;
		});
		archive.pipe(output);
		archive.glob('**', {
			cwd: `${path.dirname(require.main?.filename)}/../${project.name}`,
			ignore: ['**/node_modules/**'],
		  }, {
			prefix: project.name
		  } )
		archive.finalize();
	}

	arquive(project: Project): void {
		

	}
}
