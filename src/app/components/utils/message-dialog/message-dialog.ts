import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'message-dialog',
  templateUrl: 'message-dialog.html',
})
export class MessageDialog {
  constructor(public dialogRef: MatDialogRef<MessageDialog>) {}

  public message: string = '';
}
