import { ConfirmationDialog } from '../utils/confirmation-dialog/confirmation-dialog';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Input, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Gateway } from 'src/app/types/gateway';
import { GatewayRepositoryService } from 'src/app/services/gateway-repository.service';

@Component({
  selector: 'app-gateway-devices',
  templateUrl: './gateway-devices.component.html',
  styleUrls: ['./gateway-devices.component.css'],
})
export class GatewayDevicesComponent implements OnInit {
  gateway: Gateway | null = null;
  displayedColumns: string[] = ['uid', 'status', 'vendor', 'createdAt', 'actions'];
  dialogRef: MatDialogRef<ConfirmationDialog> | null = null;
  _id: string | null = null;

  constructor(
    private gatewayRepositoryService: GatewayRepositoryService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('_id');
    if (this._id) {
      this.getOne(this._id);
    }
  }

  getOne(_id: string) {
    this.gatewayRepositoryService.getOne(_id).subscribe((res: any) => {
      this.gateway = res.data.gateway;
    });
  }

  deleteDevice(deviceId: string) {
    this.dialogRef = this.dialog.open(ConfirmationDialog, {
      disableClose: false,
    });
    this.dialogRef.componentInstance.confirmMessage =
      'Are you sure you want to delete?';

    this.dialogRef.afterClosed().subscribe((result) => {
      if (result && this.gateway) {
        this.gateway.devices = this.gateway.devices.filter(
          (ele) => ele._id !== deviceId
        );
        this.gatewayRepositoryService
          .deleteDevice(this.gateway._id, deviceId)
          .subscribe(() => {});
      }
      this.dialogRef = null;
    });
  }
}
