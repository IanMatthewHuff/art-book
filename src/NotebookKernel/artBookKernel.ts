/* eslint-disable @typescript-eslint/no-empty-function */ // TODO: Just for skeleton implementation
import * as vscode from 'vscode';

export class ArtBookKernel implements vscode.NotebookKernel {
    // A few general properties for our kernel
    public readonly id = 'art-book-kernel';
    public readonly label = 'Art-Book Kernel';
    public readonly supportedLanguages = ['python', 'markdown'];

    // Public functions for our kernel
    executeCell(document: vscode.NotebookDocument, cell: vscode.NotebookCell) {
        console.log(cell.document.getText());
    }
    cancelCellExecution(document: vscode.NotebookDocument, cell: vscode.NotebookCell) {}
    executeAllCells(document: vscode.NotebookDocument) {}
    cancelAllCellsExecution(document: vscode.NotebookDocument) {}
}