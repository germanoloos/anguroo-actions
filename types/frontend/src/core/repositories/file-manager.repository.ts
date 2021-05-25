export interface FileManagerRepository {
	getFile(path: string): any;
	writeFile(path: string, content: string): void;
	readFile(path: string): string;
	copyDir(from: string, to: string):void;
}
