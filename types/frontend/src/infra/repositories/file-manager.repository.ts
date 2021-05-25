import { FileManagerRepository } from "../../core/repositories/file-manager.repository";

export class FSRepository implements FileManagerRepository {
	constructor() { }

	getFile(path: string): any {
		return require(path);
	}

	writeFile(fileName: string, content: any): void {
		const fs = require('fs');
		fs.writeFile(fileName, content, function writeJSON(err: any) {
			if (err) return console.log(err);
		});
	}

	readFile(fileName: string): string {
		const fs = require('fs')
		try {
			const data = fs.readFileSync(fileName, 'utf8')
			return data;
		} catch (err) {
			console.error(err);
			return '';
		}
	}

	copyDir(from: string, to: string): void {
		var copydir = require('copy-dir');
		copydir.sync(from, to, {
			utimes: true,  // keep add time and modify time
			mode: true,    // keep file mode
			cover: true    // cover file when exists, default is true
		}, function (err: any) {
			if (err) {
				console.error(err);
			}
			console.log('Copy completed!')
		});
	}
}
