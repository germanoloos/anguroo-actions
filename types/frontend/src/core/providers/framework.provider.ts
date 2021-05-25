import { Project } from "../dto/project.dto";
import { FileManagerRepository } from "../repositories/file-manager.repository";

export interface FramewordProvider {
    createNew(): string[];
    changeDirectory(): string;
    getProject(): Project;
    addCli(): string[];
    addUiComponent(): string[];
    addBootstrap(): string[];
    importBootstrap(fileManagerRepository: FileManagerRepository): void;
    addJQuery(): string[];
    importJQuery(fileManagerRepository: FileManagerRepository): void;
    copyTemplates(fileManagerRepository: FileManagerRepository):void;
}
