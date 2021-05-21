export interface LoggerRepository {
  info(log: string, id: string):void;
  warn(log: string, id: string):void;
  error(log: string, id: string):void;
}