import * as vscode from 'vscode';
import { ArtBookKernel } from './artBookKernel';

export class ArtBookKernelProvider implements vscode.NotebookKernelProvider {
    // Simple as our ContentProvider => NotebookKernel is a 1:1 link
    provideKernels() {
		return [new ArtBookKernel()];
	}
}