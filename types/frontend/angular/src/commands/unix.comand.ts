import { spawn } from "child_process";
import { LoggerRepository } from "../core/repositories/logger.repository";
import { TerminalCommand } from "./terminal.command";

export class UnixTerminal implements TerminalCommand {

    run = (command: string, projectId: string, logger: LoggerRepository): Promise<string> => {

        return new Promise((resolve, reject) => {
            try {
                let isWin = process.platform === "win32";
                let cmdTerminal;

                if (isWin) {
                    cmdTerminal = spawn('cmd', ['/c', command]);
                } else {
                    cmdTerminal = spawn('npm', ['i', '-g', '@angular/cli'], {shell: true});
                }

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
