import { Project } from "../../core/dto/project.dto";
import { FramewordProvider } from "../../core/providers/framework.provider";
import { FileManagerRepository } from "../../core/repositories/file-manager.repository";

export const ANGULAR_KEY = "angular";

export class AngularProvider implements FramewordProvider {

    constructor(private project: Project) {
    }

    addCli(): string[] {
        return [`npm i @angular/cli`];;
    }

    addUiComponent(): string[] {
        return [
            this.changeDirectory(),
            'npm run ng -- add @angular/material --skip-confirmation',
            'npm run ng -- g c template/header',
            'npm run ng -- g c template/footer',
            'npm i codelyzer --save',
            'npm i moment --save',
            'npm i @rxweb/types --save',
            'npm i @angular/material-moment-adapter --save',
            'npm audit fix',
        ];
    }

    createNew(): string[] {
        return [`npm run ng -- new ${this.project.name} --routing --skip-install --interactive=false --strict=true --style=${this.project.framework.props.stylesheet.toLowerCase()} --prefix=${this.project.framework.props.prefix}`];
    }

    getProject(): Project {
        return this.project;
    }

    changeDirectory(): string {
        return `cd ${this.project.name}`
    }

    addBootstrap(): string[] {
        return [
            this.changeDirectory(),
            'npm install bootstrap --save'
        ];
    }

    importBootstrap(fileManagerRepository: FileManagerRepository): void {
        const path = require('path');
        const angularJsonPath = `${path.dirname(require.main?.filename)}/../${this.project.name}/angular.json`;
        const angularJsonFile = fileManagerRepository.getFile(angularJsonPath);
        angularJsonFile.projects[this.project.name].architect.build.options.styles.push('./node_modules/bootstrap/dist/css/bootstrap.min.css');
        fileManagerRepository.writeFile(angularJsonPath, JSON.stringify(angularJsonFile, null, 2));

        const stylesPath = `${path.dirname(require.main?.filename)}/../${this.project.name}/src/styles.${this.project.framework.props.stylesheet.toLowerCase()}`;
        let styleFileContent = fileManagerRepository.readFile(stylesPath);
        styleFileContent = `@import '~bootstrap/dist/css/bootstrap.min.css';\n\n ${styleFileContent}`;
        fileManagerRepository.writeFile(stylesPath, styleFileContent);
    }

    addJQuery(): string[] {
        return [
            this.changeDirectory(),
            `npm install jquery --save`
        ];
    }

    importJQuery(fileManagerRepository: FileManagerRepository): void {
        const path = require('path');
        const angularJsonPath = `${path.dirname(require.main?.filename)}/../${this.project.name}/angular.json`;
        const angularJsonFile = fileManagerRepository.getFile(angularJsonPath);
        angularJsonFile.projects[this.project.name].architect.build.options.scripts.push('./node_modules/jquery/dist/jquery.min.js');
        fileManagerRepository.writeFile(angularJsonPath, JSON.stringify(angularJsonFile, null, 2));

    }

    copyTemplates(fileManagerRepository: FileManagerRepository): void {
        const path = require('path');
        // Core folders
        let from = `${path.dirname(require.main?.filename)}/templates/angular/core`;
        let to = `${path.dirname(require.main?.filename)}/../${this.project.name}/src/app/core`;
        fileManagerRepository.copyDir(from, to);

        from = `${path.dirname(require.main?.filename)}/templates/angular/tslint.json`;
        to = `${path.dirname(require.main?.filename)}/../${this.project.name}/tslint.json`;
        fileManagerRepository.copyDir(from, to);

        // Angular Material Modules Imports
        if (this.project.framework.props.angularMaterial) {
            from = `${path.dirname(require.main?.filename)}/templates/angular/app-material.tmp`;
            to = `${path.dirname(require.main?.filename)}/../${this.project.name}/src/app/app-material.ts`;
            fileManagerRepository.copyDir(from, to);
        }
    }
}