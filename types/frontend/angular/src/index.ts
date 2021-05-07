import { AngurooProject } from "./model/project.model";
import payload = require("../payload.json");

const angurooProject = payload as unknown as AngurooProject;
console.log(angurooProject.name);

console.log("Angular Rules");
