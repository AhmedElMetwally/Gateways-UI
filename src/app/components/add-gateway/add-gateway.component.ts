import { Component } from '@angular/core';
import { GatewayRepositoryService } from 'src/app/services/gateway-repository.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MessageDialog } from '../utils/message-dialog/message-dialog';

@Component({
  selector: 'app-add-gateway',
  templateUrl: './add-gateway.component.html',
  styleUrls: ['./add-gateway.component.css'],
})
export class AddGatewayComponent {
  dialogRef: MatDialogRef<MessageDialog> | null = null;
  serial: string = '';
  ip: string = '';
  name: string = '';

  constructor(
    private gatewayRepositoryService: GatewayRepositoryService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  save() {
    this.gatewayRepositoryService
      .create(this.serial || null, this.ip, this.name)
      .subscribe(
        () => {
          this.router.navigate(['/gateways']);
        },
        (err) => {
          this.dialogRef = this.dialog.open(MessageDialog, {
            disableClose: false,
          });
          this.dialogRef.componentInstance.message = err.error.message;

          this.dialogRef.afterClosed().subscribe(() => {
            this.dialogRef = null;
          });
        }
      );
  }
}
