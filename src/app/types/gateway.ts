export interface Gateway {
  _id: string;
  ip: string;
  name: string;
  serial: string;
  devices: {
    _id: string;
    createdAt: string;
    status: string;
    uid: number;
    vendor: string;
  }[];
}
