import { spawn } from "child_process";

export const runCommand = (commands: string, callback?: any) => {
    let isWin = process.platform === "win32";
    let cmdTerminal;

    if (isWin) {
        cmdTerminal = spawn('cmd', ['/c', command]);
    } else {
        cmdTerminal = spawn(command);
    }

    cmdTerminal.stdout.on('data', (data: any) => {
        console.log(`stdout: ${data}`);
    });

    cmdTerminal.stderr.on('data', (data: any) => {
        console.log(`stderr: ${data}`);
    });

    cmdTerminal.on('close', (code: any) => {
        console.log(`child process exited with code ${code}`);
        if (callback) {
            callback();
        }
    });
}