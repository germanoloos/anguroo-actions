import { AngurooProject } from "./model/project.model";

const { spawn } = require('child_process');
const data = process.argv.slice(2)[0];
const angurooProject = JSON.parse(Buffer.from(data, "base64").toString("ascii")) as AngurooProject;

// console.log(angurooProject);

const ngCreateCommand = `ng new ${angurooProject.name}` +
    `--routing=true --skip-install --interactive=false --strict=true` +
    `--style=${angurooProject.framework.props.stylesheet.toLowerCase()} ` +
    `--prefix=${angurooProject.framework.props.prefix}`;

console.log(ngCreateCommand);

var isWin = process.platform === "win32";
let cmdTerminal;

if (isWin) {
    cmdTerminal = spawn('cmd', ['/c', ngCreateCommand]);
} else {
    cmdTerminal = spawn(ngCreateCommand);
}

cmdTerminal.stdout.on('data', (data: any) => {
    console.log(`stdout: ${data}`);
});

cmdTerminal.stderr.on('data', (data: any) => {
    console.log(`stderr: ${data}`);
});

cmdTerminal.on('close', (code: any) => {
    console.log(`child process exited with code ${code}`);
});
