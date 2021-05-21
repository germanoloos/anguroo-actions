import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { LoggerRepository } from "../core/repositories/logger.repository";
import { TerminalCommand } from "./terminal.command";

export class UnixTerminal implements TerminalCommand {

    run = (commands: string[], projectId: string, logger: LoggerRepository): Promise<string> => {

        return new Promise((resolve, reject) => {
            try {
                commands.forEach((command) => {
                    console.log(command);
                    const commandSplit = command.split(' ');
                    const cmdTerminal = spawn(commandSplit[0], commandSplit.slice(1), { shell: true });
                    cmdTerminal.stdout.on('data', (data: any) => {
                        logger.info(`${data}`, projectId);
                    });

                    cmdTerminal.stderr.on('data', (data: any) => {
                        logger.error(`${data}`, projectId);
                    });

                    cmdTerminal.on('close', (code: any) => {
                        resolve(`child process exited with code ${code}`);
                    });
                });
            } catch (e) {
                reject(e)
            }
        })
    }
}
