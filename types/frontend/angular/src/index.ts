import { AngurooProject } from "./model/project.model";

const fs = require('fs');

try {
  const data = fs.readFileSync('../payload.json', 'utf8')
  const angurooProject = eval(data) as unknown as AngurooProject;
  console.log(angurooProject.name);
} catch (err) {
  console.error(err)
}



console.log("Angular Rules");
