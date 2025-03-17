import { College } from './college';
import { Batch } from './batch';

export interface Department {
  id: number;
  name: string;
  hod: string;
  college: College;
  batches?: Batch[];
}
