
import { Base64Adapter } from "./adapters/base64.adapter";
import { ControllerFactory } from "./factories/controller.factory";


const data = process.argv.slice(2)[0];
const angurooProject = Base64Adapter.adapt(data);

// ControllerFactory.createProjectController().create(angurooProject).then(() => {
//     ControllerFactory.arquiveProjectController().arquive(angurooProject)
// });
ControllerFactory.arquiveProjectController().arquive(angurooProject)
