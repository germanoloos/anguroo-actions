import { Project } from "../core/dto/project.dto";

export class Base64Adapter {
	static adapt(content: string): Project {
		return JSON.parse(Buffer.from(content, "base64").toString("ascii")) as Project;
	}
}