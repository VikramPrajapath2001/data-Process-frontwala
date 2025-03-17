import { Batch } from './batch';

export interface Student {
  id: number;
  name: string;
  dateOfBirth: Date;
  batch: Batch;
}
