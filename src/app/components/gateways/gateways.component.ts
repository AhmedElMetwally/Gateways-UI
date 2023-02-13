import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialog } from '../utils/confirmation-dialog/confirmation-dialog';
import { Gateway } from 'src/app/types/gateway';
import { GatewayRepositoryService } from 'src/app/services/gateway-repository.service';

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.css'],

})
export class GatewaysComponent implements OnInit {
  gateways: Omit<Gateway, 'devceis'>[] = [];
  displayedColumns = ['_id', 'ip', 'name', 'serial', 'actions'];
  dialogRef: MatDialogRef<ConfirmationDialog> | null = null;

  constructor(
    private gatewayRepositoryService: GatewayRepositoryService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.gatewayRepositoryService
      .getAll(1, 200, 'desc')
      .subscribe((res: any) => {
        this.gateways = res.data.gateways;
      });
  }

  deleteOne(_id: string) {
    this.dialogRef = this.dialog.open(ConfirmationDialog, {
      disableClose: false,
    });
    this.dialogRef.componentInstance.confirmMessage =
      'Are you sure you want to delete?';

    this.dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.gateways = this.gateways.filter((ele) => ele._id !== _id);
        this.gatewayRepositoryService.deleteOne(_id).subscribe(() => {});
      }
      this.dialogRef = null;
    });
  }
}
