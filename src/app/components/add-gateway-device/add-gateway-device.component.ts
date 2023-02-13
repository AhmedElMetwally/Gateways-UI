import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GatewayRepositoryService } from 'src/app/services/gateway-repository.service';
import { MessageDialog } from '../utils/message-dialog/message-dialog';

@Component({
  selector: 'app-add-gateway-device',
  templateUrl: './add-gateway-device.component.html',
  styleUrls: ['./add-gateway-device.component.css'],
})
export class AddGatewayDeviceComponent {
  dialogRef: MatDialogRef<MessageDialog> | null = null;
  vendor: string = '';
  status: string = 'online';
  _id: string | null = null;

  statuses = ['online', 'offline'];

  constructor(
    private gatewayRepositoryService: GatewayRepositoryService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this._id = this.route.snapshot.paramMap.get('_id');
  }

  save() {
    if (this._id) {
      this.gatewayRepositoryService
        .addDevice(this._id, this.vendor, this.status)
        .subscribe(
          () => {
            this.router.navigate(['/gateways', this._id]);
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
}
