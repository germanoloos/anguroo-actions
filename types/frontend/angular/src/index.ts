import { AngurooProject } from "./model/project.model";

const data = process.argv.slice(2)[0];
const angurooProject = JSON.parse(new Buffer(data, "base64").toString("ascii")) as AngurooProject;

console.log("Angular Rules! ", angurooProject.name);