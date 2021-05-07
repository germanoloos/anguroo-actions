import { AngurooProject } from "./model/project.model";
import payload from "../payload.json";

const angurooProject = payload as AngurooProject;
console.log(angurooProject.name);

console.log("Angular Rules");
