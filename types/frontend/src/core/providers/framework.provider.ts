import { Project } from "../dto/project.dto";

export interface FramewordProvider {
    getProject(): Project;
    addCli(): string[];
    addUiComponent(): string[];
    createNew(): string[];
    changeDirectory(): string;
}