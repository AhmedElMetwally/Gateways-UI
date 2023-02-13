import { AddGatewayDeviceComponent } from './components/add-gateway-device/add-gateway-device.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGatewayComponent } from './components/add-gateway/add-gateway.component';
import { GatewayDevicesComponent } from './components/gateway-devices/gateway-devices.component';
import { GatewaysComponent } from './components/gateways/gateways.component';

const routes: Routes = [
  { path: '', redirectTo: 'gateways', pathMatch: 'full' },
  { path: 'gateways', component: GatewaysComponent },
  { path: 'add-gateway', component: AddGatewayComponent },
  { path: 'gateways/:_id', component: GatewayDevicesComponent },
  { path: 'gateways/:_id/add-gateway-device', component: AddGatewayDeviceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
