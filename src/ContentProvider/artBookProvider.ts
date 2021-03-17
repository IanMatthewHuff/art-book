/* eslint-disable @typescript-eslint/no-empty-function */ // TODO: Just for initial impl
import * as vscode from 'vscode';

export class ArtBookProvider implements vscode.NotebookContentProvider {
  async openNotebook(uri: vscode.Uri): Promise<vscode.NotebookData> {
    const content = JSON.parse((await vscode.workspace.fs.readFile(uri)).toString());
    return {
      metadata: new vscode.NotebookDocumentMetadata(true, true, true, content.metadata, vscode.NotebookRunState.Idle, true),
      cells: content.cells.map((cell: any) => {
        if (cell.cell_type === 'markdown') {
          return {
            cellKind: vscode.NotebookCellKind.Markdown,
            source: cell.source,
            language: 'markdown',
            outputs: [],
            metadata: {}
          };
        } else if (cell.cell_type === 'code') {
          return {
            cellKind: vscode.NotebookCellKind.Code,
            source: cell.source,
            language: 'python',
            outputs: [],
            metadata: {}
          };
        } else {
          console.error('Unexpected cell:', cell);
        }
      })
    };
  }

  // The following are dummy implementations not relevant to this example.
  onDidChangeNotebookContentOptions = new vscode.EventEmitter<vscode.NotebookDocumentContentOptions>().event;
  async resolveNotebook(): Promise<void> {}
  async saveNotebook(): Promise<void> {}
  async saveNotebookAs(): Promise<void> {}
  async backupNotebook(): Promise<vscode.NotebookDocumentBackup> {
    return { id: '', delete: () => {} };
  }
}