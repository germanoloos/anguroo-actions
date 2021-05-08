import { AngurooProject } from "./model/project.model";

const data = process.argv.slice(2)[0];
console.log(new Buffer(data, "base64").toString("ascii"));


console.log("Angular Rules");