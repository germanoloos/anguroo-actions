import { Project } from "../../core/dto/project.dto";
import { FramewordProvider } from "../../core/providers/framework.provider";

export const ANGULAR_KEY = "angular";

export class AngularProvider implements FramewordProvider {

    constructor (private project: Project){
    }

    addCli(): string {
        return `npm i @angular/cli`;;
    }

    addUiComponent(): string {
        return `pushd ${this.project.name} && ng add @angular/material --skip-confirmation && popd`;
    }

    createNew(): string {
        return `npm run ng -- new ${this.project.name} --routing=true --skip-install --interactive=false --strict=true --style=${this.project.framework.props.stylesheet.toLowerCase()} --prefix=${this.project.framework.props.prefix}`;
    }

    getProject(): Project{
        return this.project;
    }

}