import { ArquiveRepository } from "../core/repositories/arquive.repository";
import { FileManagerRepository } from "../core/repositories/file-manager.repository";
import { LoggerRepository } from "../core/repositories/logger.repository";
import { TerminalRepository } from "../core/repositories/terminal.repository";
import { ArquiveProjectRepository } from "../infra/repositories/arquive-project.repository";
import { FSRepository } from "../infra/repositories/file-manager.repository";
import { LoggerApiRepository } from "../infra/repositories/logger-api.repository";
import { TerminalCommandRepository } from "../infra/repositories/terminal-command.repository";

export class RepositoryFactory {
  static terminalRepositoty: TerminalRepository;
  static loggerRepository: LoggerRepository;
  static fileManagerRepository: FileManagerRepository;
  static arquiveRepository: ArquiveRepository;

  static getTerminalRepository(): TerminalRepository {
    if (!this.terminalRepositoty) {
      this.terminalRepositoty = new TerminalCommandRepository();
    }
    return this.terminalRepositoty;
  }

  static getLoggerRepository(): LoggerRepository {
    if (!this.loggerRepository) {
      this.loggerRepository = new LoggerApiRepository();
    }
    return this.loggerRepository;
  }
  
  static getFileManagerRepository(): FileManagerRepository {
    if (!this.fileManagerRepository) {
      this.fileManagerRepository = new FSRepository();
    }
    return this.fileManagerRepository;
  }
  
  static getArquiveRepository(): ArquiveRepository {
    if (!this.arquiveRepository) {
      this.arquiveRepository = new ArquiveProjectRepository();
    }
    return this.arquiveRepository;
  }
}
