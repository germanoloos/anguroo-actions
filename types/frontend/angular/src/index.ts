import { AngurooProject } from "./model/project.model";
import { runCommand } from "./services/commands.service";

const data = process.argv.slice(2)[0];
const angurooProject = JSON.parse(Buffer.from(data, "base64").toString("ascii")) as AngurooProject;

console.log(angurooProject);

const angularCliCommand = `npm i -g @angular/cli`;
const ngCreateCommand = `ng new ${angurooProject.name} ` +
    `--routing=true --skip-install --interactive=false --strict=true ` +
    `--style=${angurooProject.framework.props.stylesheet.toLowerCase()} ` +
    `--prefix=${angurooProject.framework.props.prefix}`;
const angularMaterialCommand = `pushd ${angurooProject.name} && ng add @angular/material --skip-confirmation && popd`;

runCommand(angularCliCommand,
    () => runCommand(ngCreateCommand,
        () => runCommand(angularMaterialCommand)
    )
)