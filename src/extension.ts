import * as vscode from 'vscode';
import { ArtBookProvider } from "./ContentProvider/artBookProvider";
import { ArtBookKernelProvider } from './NotebookKernel/artBookKernelProvider';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(
		vscode.notebook.registerNotebookContentProvider(
			'art-book',
			new ArtBookProvider()
		)
	);

	context.subscriptions.push(
		vscode.notebook.registerNotebookKernelProvider({ viewType: 'art-book'}, new ArtBookKernelProvider())
	);

	context.subscriptions.push(disposable);
}
