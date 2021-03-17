import * as vscode from 'vscode';
import { ArtBookProvider } from "./ContentProvider/artBookProvider";

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(
		vscode.notebook.registerNotebookContentProvider(
			'art-book-provider',
			new ArtBookProvider()
		)
	);

	context.subscriptions.push(disposable);
}
