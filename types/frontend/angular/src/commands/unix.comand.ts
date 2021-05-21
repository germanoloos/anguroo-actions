import { spawn } from "child_process";
import { LoggerRepository } from "../core/repositories/logger.repository";
import { TerminalCommand } from "./terminal.command";

export class UnixTerminal implements TerminalCommand {

    run = (command: string, projectId: string, logger: LoggerRepository): Promise<string> => {

        return new Promise((resolve, reject) => {
            try {
                let isWin = process.platform === "win32";
                let cmdTerminal;
                console.log(command);
                if (isWin) {
                    cmdTerminal = spawn('cmd', ['/c', command]);
                } else {
                    // const commandSplit = command.split(' ');
                    // cmdTerminal = spawn(commandSplit[0], commandSplit.slice(1), {shell: true});
                    cmdTerminal = spawn('ls', []);
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
