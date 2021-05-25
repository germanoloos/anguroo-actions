import { FramewordProvider } from "../providers/framework.provider";
import { FileManagerRepository } from "../repositories/file-manager.repository";

export class CopyTemplates {

	constructor(
		private readonly _fileManagerRepository: FileManagerRepository
	) { }

	copyTemplates(framework: FramewordProvider):void {
		framework.copyTemplates(this._fileManagerRepository);
	}
}