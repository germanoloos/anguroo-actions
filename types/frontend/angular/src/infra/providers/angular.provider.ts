import { Project } from "../../core/dto/project.dto";
import { FramewordProvider } from "../../core/providers/framework.provider";

export const ANGULAR_KEY = "angular";

export class AngularProvider implements FramewordProvider {

    addCli(): string {
        return `npm i -g @angular/cli`;;
    }

    addUiComponent(project: Project): string {
        return `pushd ${project.name} && ng add @angular/material --skip-confirmation && popd`;
    }

    createNew(project: Project): string {
        return `ng new ${project.name}
        --routing=true --skip-install --interactive=false --strict=true
        --style=${project.framework.props.stylesheet.toLowerCase()}
        --prefix=${project.framework.props.prefix}`;
    }

}