import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GatewayRepositoryService {
  private baseUrl = 'http://68.183.217.165:4200/api/v1';

  constructor(private http: HttpClient) {}

  public create(serial: string | null, ip: string, name: string) {
    return this.http.post(`${this.baseUrl}/gateways`, {
      ip,
      serial,
      name,
    });
  }

  public getAll(pageNumber: number, pageSize: number, sort: 'desc' | 'asc') {
    return this.http.get(
      `${this.baseUrl}/gateways?pageNumber=${pageNumber}&pageSize=${pageSize}&sort=${sort}`
    );
  }

  public getOne(_id: string) {
    return this.http.get(`${this.baseUrl}/gateways/${_id}`);
  }

  public deleteOne(_id: string) {
    return this.http.delete(`${this.baseUrl}/gateways/${_id}`);
  }

  public deleteDevice(_id: string, deviceId: string) {
    return this.http.delete(`${this.baseUrl}/gateways/${_id}/devices`, {
      body: {
        devices: [
          {
            _id: deviceId,
          },
        ],
      },
    });
  }

  public addDevice(_id: string, vendor: string, status: string) {
    return this.http.put(`${this.baseUrl}/gateways/${_id}/devices`, {
      devices: [
        {
          vendor,
          status,
        },
      ],
    });
  }
}
