import { spawn } from "child_process";
import { LoggerRepository } from "../core/repositories/logger.repository";
import { TerminalCommand } from "./terminal.command";

export class UnixTerminal implements TerminalCommand {

    run = (commands: string[], projectId: string, logger: LoggerRepository): Promise<string> => {

        return new Promise((resolve, reject) => {

            var echo = spawn('echo', ['The quick brown fox\njumped over the lazy dog.']);
            var grep = spawn('grep', ['brown']);

            echo.stdout.pipe(grep.stdin);
            grep.stdout.pipe(process.stdin);


            try {
                const cmdTerminal = spawn(commands.join(' && '), [], { shell: true });

                cmdTerminal.stdout.on('data', (data: any) => {
                    logger.info(`${data}`, projectId);
                });

                cmdTerminal.stderr.on('data', (data: any) => {
                    logger.error(`${data}`, projectId);
                });

                cmdTerminal.on('close', (code: any) => {
                    resolve(`child process exited with code ${code}`);
                });
            } catch (e) {
                reject(e)
            }
        })
    }
}
