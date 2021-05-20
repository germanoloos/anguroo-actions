import { Project } from "../dto/project.dto";

export interface FramewordProvider {
    addCli(): string;
    addUiComponent(project: Project): string;
    createNew(project: Project): string;
}