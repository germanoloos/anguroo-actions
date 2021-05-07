import { AngurooProject } from "./model/project.model";

const payload = JSON.parse(process.argv.splice(2)[0]) as AngurooProject; 

console.log(payload.name);
console.log("Angular Rules!");
