import { Project } from "../dto/project.dto";
import { LoggerRepository } from "./logger.repository";

export interface ArquiveRepository {
	compress(project: Project, logger: LoggerRepository): void;
	arquive(project: Project, logger: LoggerRepository): void;
}
