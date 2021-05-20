import { LoggerRepository } from "../core/repositories/logger.repository";
import { TerminalRepository } from "../core/repositories/terminal.repository";
import { LoggerApiRepository } from "../infra/repositories/logger-api.repository";
import { TerminalCommandRepository } from "../infra/repositories/terminal-command.repository";

export class RepositoryFactory {
  static terminalRepositoty: TerminalRepository;
  static loggerRepository: LoggerRepository;

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
}
