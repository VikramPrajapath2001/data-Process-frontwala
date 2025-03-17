import { Department } from './department';

export interface College {
  id: number;
  name: string;
  address: string;
  departments?: Department[];
}
