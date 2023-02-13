import { GatewaysComponent } from './components/gateways/gateways.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { GatewayDevicesComponent } from './components/gateway-devices/gateway-devices.component';
import { ConfirmationDialog } from './components/utils/confirmation-dialog/confirmation-dialog';
import { AddGatewayComponent } from './components/add-gateway/add-gateway.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AddGatewayDeviceComponent } from './components/add-gateway-device/add-gateway-device.component';
import { MatSelectModule } from '@angular/material/select';
import { MessageDialog } from './components/utils/message-dialog/message-dialog';

@NgModule({
  declarations: [
    AppComponent,
    GatewaysComponent,
    GatewayDevicesComponent,
    ConfirmationDialog,
    AddGatewayComponent,
    AddGatewayDeviceComponent,
    MessageDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
